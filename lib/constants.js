export const AppConstants = {
    STORAGE_KEYS: {
      AUTH_TOKEN: "auth_token",
    },
    VALIDATION_REGEX: {
      EMAIL:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      PASSWORD_PARTS: {
        NUMBER: /[0-9]/g,
        LOWERCASE: /[a-z]/g,
        UPPERCASE: /[A-Z]/g,
        SPECIAL_CHAR: /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/,
        MIN_MAX: /^.{6,30}$/,
      },
      PASSWORD_REGEX:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]).{8,20}$/,
    },
    HTTP_VERBS: {
      GET: "GET",
      POST: "POST",
      PUT: "PUT",
    },
    API_ROUTES: {
        LOGIN: "/api/auth/login",
        REGISTER: "/api/auth/register",
    },
  };
  