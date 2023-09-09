module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
      plugins: [
          [
              'module-resolver',
              {
                  alias: {
                      '@design-system': './src/design-system',
                      '@hooks': './src/hooks',
                      '@images': './src/assets/images',
                      '@pages': './src/pages',
                      '@components': './src/components',
                      '@utils': './src/utils',     
                      '@types': './src/types',     
                    },
              },
          ],
      ],
  };
};
