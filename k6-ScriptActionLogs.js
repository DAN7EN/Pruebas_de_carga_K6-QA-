// Auto-generated by the postman-to-k6 converter

import "./libs/shim/core.js";
import "./libs/shim/expect.js";
import "./libs/shim/urijs.js";

export let options = { maxRedirects: 4 };

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options
});

export default function() {
  postman[Request]({
    name: "01_auth_token",
    id: "957de449-b725-4d1f-bf29-bd5e34a70b7f",
    method: "POST",
    address: "https://servicesqa.siigo.com/auth/connect/token",
    data: {
      grant_type: "password",
      password: "1111",
      scope: "WebApi offline_access",
      username: "microservicios1@arquitectura.com"
    },
    headers: {
      Authorization:
        "Basic U2lpZ29XZWI6QUJBMDhCNkEtQjU2Qy00MEE1LTkwQ0YtN0MxRTU0ODkxQjYx"
    },
    post(response) {
      var jsonData = pm.response.json();

      pm.test("Status code is 201", function() {
        pm.response.to.have.status(201);
      });

      pm.environment.set("token", jsonData.access_token);
    }
  });

  postman[Request]({
    name: "02_create_user_attributes_log",
    id: "82338619-c4c0-462e-a782-935a5064305d",
    method: "POST",
    address: "{{url}}/userAttributesLog",
    data:
      '{\r\n  "UserRoles": "{{userRoles}}",\r\n  "JobTitle": "{{jobTitle}}",\r\n  "BossName": "{{bossName}}",\r\n  "ConfidentLevel": "{{confidentLevel}}"\r\n}',
    headers: {
      Authorization:
        "eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ3OTkxNEU2MTJFRkI4NjE5RDNFQ0U4REFGQTU0RDFBMDdCQjM5QjJSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IjE1a1U1aEx2dUdHZFBzNk5yNlZOR2dlN09iSSJ9.eyJuYmYiOjE2Nzk0MzMxODIsImV4cCI6MTY3OTUxOTU4MiwiaXNzIjoiaHR0cDovL21zLXNlY3VyaXR5c2VydmljZTo1MDAwIiwiYXVkIjoiaHR0cDovL21zLXNlY3VyaXR5c2VydmljZTo1MDAwL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IlNpaWdvV2ViIiwic3ViIjoiMTA2NjA1NiIsImF1dGhfdGltZSI6MTY3OTQzMzE4MiwiaWRwIjoibG9jYWwiLCJuYW1lIjoiUUFBcnF1aXRlY3R1cmFOdWV2b1NpaWdvTnViZV9QYW8wMDFAeW90bWFpbC5jb20iLCJtYWlsX3NpaWdvIjoiUUFBcnF1aXRlY3R1cmFOdWV2b1NpaWdvTnViZV9QYW8wMDFAeW90bWFpbC5jb20iLCJjbG91ZF90ZW5hbnRfY29tcGFueV9rZXkiOiJRQUFycXVpdGVjdHVyYU51ZXZvU2lpZ29OdWJlX1BhbzAwMSIsInVzZXJzX2lkIjoiMzUyMjYiLCJ0ZW5hbnRfaWQiOiIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTg4NjY1IiwidXNlcl9saWNlbnNlX3R5cGUiOiIwIiwicGxhbl90eXBlIjoiNSIsInRlbmFudF9zdGF0ZSI6IjEiLCJtdWx0aXRlbmFudF9pZCI6IjEwNCIsImNvbXBhbmllcyI6IjIiLCJhcGlfc3Vic2NyaXB0aW9uX2tleSI6IiIsImFjY291bnRhbnQiOiJmYWxzZSIsImp0aSI6IjVGNENDQ0RFMzkxQzQ1MkQyNDU5RkU4RkEzMzg3RDEwIiwiaWF0IjoxNjc5NDMzMTgyLCJzY29wZSI6WyJXZWJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsiY3VzdG9tIl19.xfSsIHVYgQ6N8fghxzLXV3prOC2FamZxyJ2387xl9qKu8c_EBSrnYQNdOoCmiZUeNPWcSlSx4m5y_oivNPNbj0VlefhaOknX0WWEwbSmPiniv2-Icwj4nUW3WXv5A9IR00dKhwcdF9NNjOTOpZco7HIx3cWLJI8rfGivRdE4x124qTMYpaP4fDoYR4RcgRuZAFDGyWJFN8SXHNFX5ANLI3-heT4l09L3q1eLUeqqkjimF_rcdA4t7KSGj3phCIGy4z5dT7uuO3HAZfKiw1K3gOXv0red0Ko0oyZyFC1Wmxk6tjVjlEWfcjt7cMslybW3fcLZc0ssHwe8B3n0mQs6ZQ"
    },
    post(response) {
      var jsonData = pm.response.json();
      var regex = /^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/;

      pm.test("Status code is 201", function() {
        pm.response.to.have.status(201);
      });

      pm.test("Response time is less than 1 second", function() {
        pm.expect(pm.response.responseTime).to.be.below(
          parseInt(pm.environment.get("responseTime"))
        );
      });

      pm.test("Response time is less than 2 second", function() {
        pm.expect(pm.response.responseTime).to.be.below(201);
      });

      pm.test("Valid GUID length", function() {
        pm.expect(jsonData.length).to.equal(36);
      });

      //Test Guid is not null
      pm.test("UserAttributesLog GUID is not null", function() {
        pm.expect(jsonData).not.eql(null);
      });

      //Test Guid is not 0
      pm.test("UserAttributesLog GUID is not 0", function() {
        pm.expect(jsonData).not.eql(0);
      });

      //Test Guid has a GUID format
      pm.test("UserAttributesLog GUID has valid format", function() {
        pm.expect(regex.test(jsonData));
      });
    }
  });

  postman[Request]({
    name: "02_create_session_access_log",
    id: "d99285be-ba76-4d78-a20f-b544c42769a2",
    method: "POST",
    address: "{{url}}/sessionAccessLog",
    data: '{\r\n  "TabCode": "{{tabCode}}",\r\n  "URL": "{{sessionUrl}}"\r\n}',
    headers: {
      Authorization:
        "eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ3OTkxNEU2MTJFRkI4NjE5RDNFQ0U4REFGQTU0RDFBMDdCQjM5QjJSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IjE1a1U1aEx2dUdHZFBzNk5yNlZOR2dlN09iSSJ9.eyJuYmYiOjE2Nzk0Mjk3NzIsImV4cCI6MTY3OTUxNjE3MiwiaXNzIjoiaHR0cDovL21zLXNlY3VyaXR5c2VydmljZTo1MDAwIiwiYXVkIjoiaHR0cDovL21zLXNlY3VyaXR5c2VydmljZTo1MDAwL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IlNpaWdvV2ViIiwic3ViIjoiMTA2NjA1NiIsImF1dGhfdGltZSI6MTY3OTQyOTc3MiwiaWRwIjoibG9jYWwiLCJuYW1lIjoiUUFBcnF1aXRlY3R1cmFOdWV2b1NpaWdvTnViZV9QYW8wMDFAeW90bWFpbC5jb20iLCJtYWlsX3NpaWdvIjoiUUFBcnF1aXRlY3R1cmFOdWV2b1NpaWdvTnViZV9QYW8wMDFAeW90bWFpbC5jb20iLCJjbG91ZF90ZW5hbnRfY29tcGFueV9rZXkiOiJRQUFycXVpdGVjdHVyYU51ZXZvU2lpZ29OdWJlX1BhbzAwMSIsInVzZXJzX2lkIjoiMzUyMjYiLCJ0ZW5hbnRfaWQiOiIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTg4NjY1IiwidXNlcl9saWNlbnNlX3R5cGUiOiIwIiwicGxhbl90eXBlIjoiNSIsInRlbmFudF9zdGF0ZSI6IjEiLCJtdWx0aXRlbmFudF9pZCI6IjEwNCIsImNvbXBhbmllcyI6IjIiLCJhcGlfc3Vic2NyaXB0aW9uX2tleSI6IiIsImFjY291bnRhbnQiOiJmYWxzZSIsImp0aSI6IkE1N0VGQjc5RjU4NkYxODY5QTU3QUQ5NEE2M0U1OEM1IiwiaWF0IjoxNjc5NDI5NzcyLCJzY29wZSI6WyJXZWJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsiY3VzdG9tIl19.x5KMIpwlKnlKRBMYTRz4OzBvDU9LSYlJOq-utw0rvNwML5OA-d48cvxX1wW1Uhk5J4JYu1JQmw8dyKe0qjskpUGdSyMjIQ-htzpYO0sjXzev4VyqB9TlNOoSbMtE1YrHIJSbTA1nFKq5wiwfKkYSh_C434gbJxWGWiPVElHwpqpT8zx6LIWsH-Ua_Y9YnpZOEkqrM0Arnqsm7Sd197ZUFk3Ku1f6b4r3PpIawj0M0aoB7e-w3C0SzHiOnUb1ZPz1Kk-vtiG4Rii1OZ8FYASZvSF11fF-jt5MoIw9vi3t3Qtxt-WYvbvUlEV2zkF-sw5Kr8MoN1ty5Vl2tD1tds0Olw"
    },
    post(response) {
      var jsonData = pm.response.json();
      var regex = /^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/;

      pm.test("Status code is 201", function() {
        pm.response.to.have.status(201);
      });

      pm.test("Response time is less than 1 second", function() {
        pm.expect(pm.response.responseTime).to.be.below(
          parseInt(pm.environment.get("responseTime"))
        );
      });

      pm.test("Response time is less than 2 second", function() {
        pm.expect(pm.response.responseTime).to.be.below(201);
      });

      pm.test("Valid GUID length", function() {
        pm.expect(jsonData.length).to.equal(36);
      });

      //Test Guid is not null
      pm.test("SessionAccessLog GUID is not null", function() {
        pm.expect(jsonData).not.eql(null);
      });

      //Test Guid is not 0
      pm.test("SessionAccessLog GUID is not 0", function() {
        pm.expect(jsonData).not.eql(0);
      });

      //Test Guid has a GUID format
      pm.test("SessionAccessLog GUID has valid format", function() {
        pm.expect(regex.test(jsonData));
      });
    }
  });

  postman[Request]({
    name: "02_create_session_log",
    id: "cd9da05a-5151-460d-ad31-c2736abc041c",
    method: "POST",
    address: "{{url}}/sessionLog",
    data:
      '{\r\n  "SessionID": "string",\r\n  "ServerName": "string",\r\n  "ServerIP": "string",\r\n  "ServerURL": "string",\r\n  "ClientName": "string",\r\n  "ClientIP": "string",\r\n  "UsersName": "string",\r\n  "UsersCode": 2,\r\n  "LoginSuccessfully": true\r\n}',
    headers: {
      Authorization: "{{tokens}}"
    },
    post(response) {
      var jsonData = pm.response.json();
      var regex = /^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/;

      pm.test("Status code is 201", function() {
        pm.response.to.have.status(201);
      });

      pm.test("Response time is less than 1 second", function() {
        pm.expect(pm.response.responseTime).to.be.below(
          parseInt(pm.environment.get("responseTime"))
        );
      });

      pm.test("Response time is less than 2 second", function() {
        pm.expect(pm.response.responseTime).to.be.below(201);
      });

      pm.test("Valid GUID length", function() {
        pm.expect(jsonData.length).to.equal(36);
      });

      //Test Guid is not null
      pm.test("SessionLog GUID is not null", function() {
        pm.expect(jsonData).not.eql(null);
      });

      //Test Guid is not 0
      pm.test("SessionLog GUID is not 0", function() {
        pm.expect(jsonData).not.eql(0);
      });

      //Test Guid has a GUID format
      pm.test("SessionLog GUID has valid format", function() {
        pm.expect(regex.test(jsonData));
      });
    }
  });

  postman[Request]({
    name: "03_get_session_log",
    id: "7b9a5910-ae13-48a0-b157-b0b00370de42",
    method: "GET",
    address: "{{url}}/sessionLog",
    headers: {
      Authorization:
        "eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ3OTkxNEU2MTJFRkI4NjE5RDNFQ0U4REFGQTU0RDFBMDdCQjM5QjJSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IjE1a1U1aEx2dUdHZFBzNk5yNlZOR2dlN09iSSJ9.eyJuYmYiOjE2Nzk0MzMxODIsImV4cCI6MTY3OTUxOTU4MiwiaXNzIjoiaHR0cDovL21zLXNlY3VyaXR5c2VydmljZTo1MDAwIiwiYXVkIjoiaHR0cDovL21zLXNlY3VyaXR5c2VydmljZTo1MDAwL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IlNpaWdvV2ViIiwic3ViIjoiMTA2NjA1NiIsImF1dGhfdGltZSI6MTY3OTQzMzE4MiwiaWRwIjoibG9jYWwiLCJuYW1lIjoiUUFBcnF1aXRlY3R1cmFOdWV2b1NpaWdvTnViZV9QYW8wMDFAeW90bWFpbC5jb20iLCJtYWlsX3NpaWdvIjoiUUFBcnF1aXRlY3R1cmFOdWV2b1NpaWdvTnViZV9QYW8wMDFAeW90bWFpbC5jb20iLCJjbG91ZF90ZW5hbnRfY29tcGFueV9rZXkiOiJRQUFycXVpdGVjdHVyYU51ZXZvU2lpZ29OdWJlX1BhbzAwMSIsInVzZXJzX2lkIjoiMzUyMjYiLCJ0ZW5hbnRfaWQiOiIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTg4NjY1IiwidXNlcl9saWNlbnNlX3R5cGUiOiIwIiwicGxhbl90eXBlIjoiNSIsInRlbmFudF9zdGF0ZSI6IjEiLCJtdWx0aXRlbmFudF9pZCI6IjEwNCIsImNvbXBhbmllcyI6IjIiLCJhcGlfc3Vic2NyaXB0aW9uX2tleSI6IiIsImFjY291bnRhbnQiOiJmYWxzZSIsImp0aSI6IjVGNENDQ0RFMzkxQzQ1MkQyNDU5RkU4RkEzMzg3RDEwIiwiaWF0IjoxNjc5NDMzMTgyLCJzY29wZSI6WyJXZWJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsiY3VzdG9tIl19.xfSsIHVYgQ6N8fghxzLXV3prOC2FamZxyJ2387xl9qKu8c_EBSrnYQNdOoCmiZUeNPWcSlSx4m5y_oivNPNbj0VlefhaOknX0WWEwbSmPiniv2-Icwj4nUW3WXv5A9IR00dKhwcdF9NNjOTOpZco7HIx3cWLJI8rfGivRdE4x124qTMYpaP4fDoYR4RcgRuZAFDGyWJFN8SXHNFX5ANLI3-heT4l09L3q1eLUeqqkjimF_rcdA4t7KSGj3phCIGy4z5dT7uuO3HAZfKiw1K3gOXv0red0Ko0oyZyFC1Wmxk6tjVjlEWfcjt7cMslybW3fcLZc0ssHwe8B3n0mQs6ZQ"
    },
    post(response) {
      var jsonData = pm.response.json();

      pm.test("Status code is 201", function() {
        pm.response.to.have.status(201);
      });

      pm.test("Response time is less than 1 second", function() {
        pm.expect(pm.response.responseTime).to.be.below(
          parseInt(pm.environment.get("responseTime"))
        );
      });

      pm.test("Response time is less than 2 second", function() {
        pm.expect(pm.response.responseTime).to.be.below(201);
      });

      pm.test("SessionLog positive response", function() {
        pm.expect(jsonData).to.equal(1);
      });
    }
  });

  postman[Request]({
    name: "03_get_user_attributes_log",
    id: "b28a7304-718d-43b9-b059-1ef6e9457a99",
    method: "GET",
    address: "{{url}}/userAttributesLog",
    headers: {
      Authorization:
        "eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ3OTkxNEU2MTJFRkI4NjE5RDNFQ0U4REFGQTU0RDFBMDdCQjM5QjJSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6IjE1a1U1aEx2dUdHZFBzNk5yNlZOR2dlN09iSSJ9.eyJuYmYiOjE2Nzk0Mjk3NzIsImV4cCI6MTY3OTUxNjE3MiwiaXNzIjoiaHR0cDovL21zLXNlY3VyaXR5c2VydmljZTo1MDAwIiwiYXVkIjoiaHR0cDovL21zLXNlY3VyaXR5c2VydmljZTo1MDAwL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IlNpaWdvV2ViIiwic3ViIjoiMTA2NjA1NiIsImF1dGhfdGltZSI6MTY3OTQyOTc3MiwiaWRwIjoibG9jYWwiLCJuYW1lIjoiUUFBcnF1aXRlY3R1cmFOdWV2b1NpaWdvTnViZV9QYW8wMDFAeW90bWFpbC5jb20iLCJtYWlsX3NpaWdvIjoiUUFBcnF1aXRlY3R1cmFOdWV2b1NpaWdvTnViZV9QYW8wMDFAeW90bWFpbC5jb20iLCJjbG91ZF90ZW5hbnRfY29tcGFueV9rZXkiOiJRQUFycXVpdGVjdHVyYU51ZXZvU2lpZ29OdWJlX1BhbzAwMSIsInVzZXJzX2lkIjoiMzUyMjYiLCJ0ZW5hbnRfaWQiOiIweDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTg4NjY1IiwidXNlcl9saWNlbnNlX3R5cGUiOiIwIiwicGxhbl90eXBlIjoiNSIsInRlbmFudF9zdGF0ZSI6IjEiLCJtdWx0aXRlbmFudF9pZCI6IjEwNCIsImNvbXBhbmllcyI6IjIiLCJhcGlfc3Vic2NyaXB0aW9uX2tleSI6IiIsImFjY291bnRhbnQiOiJmYWxzZSIsImp0aSI6IkE1N0VGQjc5RjU4NkYxODY5QTU3QUQ5NEE2M0U1OEM1IiwiaWF0IjoxNjc5NDI5NzcyLCJzY29wZSI6WyJXZWJBcGkiLCJvZmZsaW5lX2FjY2VzcyJdLCJhbXIiOlsiY3VzdG9tIl19.x5KMIpwlKnlKRBMYTRz4OzBvDU9LSYlJOq-utw0rvNwML5OA-d48cvxX1wW1Uhk5J4JYu1JQmw8dyKe0qjskpUGdSyMjIQ-htzpYO0sjXzev4VyqB9TlNOoSbMtE1YrHIJSbTA1nFKq5wiwfKkYSh_C434gbJxWGWiPVElHwpqpT8zx6LIWsH-Ua_Y9YnpZOEkqrM0Arnqsm7Sd197ZUFk3Ku1f6b4r3PpIawj0M0aoB7e-w3C0SzHiOnUb1ZPz1Kk-vtiG4Rii1OZ8FYASZvSF11fF-jt5MoIw9vi3t3Qtxt-WYvbvUlEV2zkF-sw5Kr8MoN1ty5Vl2tD1tds0Olw"
    },
    post(response) {
      var jsonData = pm.response.json();
      var regex = /^[0-9a-f]{8}-([0-9a-f]{4}-){3}[0-9a-f]{12}$/;

      pm.test("Status code is 201", function() {
        pm.response.to.have.status(201);
      });

      pm.test("Response time is less than 1 second", function() {
        pm.expect(pm.response.responseTime).to.be.below(
          parseInt(pm.environment.get("responseTime"))
        );
      });

      pm.test("Response time is less than 2 second", function() {
        pm.expect(pm.response.responseTime).to.be.below(201);
      });

      pm.test("Valid GUID length", function() {
        pm.expect(jsonData.length).to.equal(36);
      });

      //Test Guid is not null
      pm.test("UserAttributesLog GUID is not null", function() {
        pm.expect(jsonData).not.eql(null);
      });

      //Test Guid is not 0
      pm.test("UserAttributesLog GUID is not 0", function() {
        pm.expect(jsonData).not.eql(0);
      });

      //Test Guid has a GUID format
      pm.test("UserAttributesLog GUID has valid format", function() {
        pm.expect(regex.test(jsonData));
      });
    }
  });
}