import http from 'k6/http';
import { check, group, sleep } from 'k6';

const BASE_URL = 'https://reqres.in';

export default function () {
  group('Create User API', function () {
    const payload = {
      name: 'John Doe',
      job: 'Tester',
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
      name: 'Jhon Updated',
      job: 'Tester Updated',
    };

    const res = http.put(`${BASE_URL}/api/users/119`, JSON.stringify(payload), {
      headers: {
        'Content-Type': 'application/json'
      },
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
