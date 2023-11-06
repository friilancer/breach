export const AppConstants = {
    STORAGE_KEYS: {
      AUTH_TOKEN: "auth_token",
      USER_ID: "user_id",
      ONBOARDED: "onboarded",
    },
    VALIDATION_REGEX: {
      EMAIL:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      PASSWORD_REGEX:
        /^(\w+).{5,20}$/,
    },
    HTTP_VERBS: {
      GET: "GET",
      POST: "POST",
      PUT: "PUT",
    },
    API_ROUTES: {
        LOGIN: "/api/auth/login",
        REGISTER: "/api/auth/register",
        CATEGORIES: "/api/blog/categories",
        INTERESTS: (id) => `/api/users/${id}/interests`,
        POSTS: "/api/blog/posts",
    },
    PUBLIC_PAGES: ['/login', '/register', '/'],
    MONTHS: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sept',
      'Oct',
      'Nov',
      'Dec'
    ]
  };
  