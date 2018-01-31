// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'https://api.amalyze.com/0.0.12/',
  siteKey: '6LcKNEIUAAAAAPGe3VDGzUcqXyi5iyMD-IPhiXej',
  localStorage: {
    prefix: 'mana',
    xrsf_token: 'xrsf_token',
    falcon_token: 'falcon_token'
  },
};
