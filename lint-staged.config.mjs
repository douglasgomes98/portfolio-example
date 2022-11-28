export default {
  'src/**': () => [
    'yarn eslint --max-warnings=0 --cache --ext .js,.jsx src',
    'yarn prettier --cache src',
  ],
};
