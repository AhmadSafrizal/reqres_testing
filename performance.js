import http from 'k6/http';
import { check, group, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export const options = {
  vus: 1000,
  iterations: 3500,
  thresholds: {
    http_req_duration: ['avg < 2000'],
    http_req_failed: ['rate < 0.1'],
  },
};

const BASE_URL = 'https://reqres.in';

export default function () {
  group('Create User API', function () {
    const payload = {
      name: 'Bambang',
      job: 'Manager',
    };

    const res = http.post(`${BASE_URL}/api/users`, JSON.stringify(payload), {
      headers: { 
        'Content-Type': 'application/json' 
      },
    });

    check(res, {
      'Create User Status 201': (res) => res.status === 201,
    });

    check(res, {
      'Response name should same with name request': (res) => {
        const response = JSON.parse(res.body);
        return response.name === payload.name;
      }
    });

    check(res, {
      'Response job should same with job request': (res) => {
        const response = JSON.parse(res.body);
        return response.job === payload.job;
      }
    });
  });

  sleep(1);

  group('Update User API', function () {
    const payload = {
      name: 'Bambang Updated',
      job: 'Manager Updated',
    };

    const res = http.put(`${BASE_URL}/api/users/119`, JSON.stringify(payload), {
      headers: { 'Content-Type': 'application/json' },
    });

    check(res, {
      'Update User Status 200': (res) => res.status === 200,
    });

    check(res, {
      'Response name should same with name request': (res) => {
        const response = JSON.parse(res.body);
        return response.name === payload.name;
      }
    });

    check(res, {
      'Response job should same with job request': (res) => {
        const response = JSON.parse(res.body);
        return response.job === payload.job;
      }
    });
  });

  sleep(1);
}

export function handleSummary(data) {
  return {
    "./report.html": htmlReport(data),
  }
}
