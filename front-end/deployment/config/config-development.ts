/**
 * Add your hosted dev URL here
 */
const HOSTED_URL = 'https://dev.domain.com';

const configDevelopment = {
  HOSTED_URL,
  MODE: 'DEVELOPMENT',
  REGION: 'eu-west-1',
  REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
  REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
  AUTHENTICATION_TYPE: 'AWS_IAM' as const,

  /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */
  USER_POOL_CLIENT_ID: "26sl1k9em87k6h1o47557lot29",
  USER_POOL_ID: "eu-west-1_T8G4DCvYi",
  IDENTITY_POOL_ID: "eu-west-1:95929ba0-f3e9-4055-9f9d-30679c793ed6",
  GRAPHQL_ENDPOINT: "https://icosuqceybdk5mptu6yi4vunrm.appsync-api.eu-west-1.amazonaws.com/graphql",
};

export default configDevelopment;
