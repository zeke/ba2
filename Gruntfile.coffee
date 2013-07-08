module.exports = (grunt) ->

  grunt.initConfig

    compass:
      dist:
        options:
          sassDir: 'src/styles'
          cssDir: 'dist/styles'
          outputStyle: 'compact'
          relativeAssets: true
          colorOutput: false

    coffee:
      app:
        options:
          bare: false
          join: true
        files:
          'dist/scripts/index.js': ['src/scripts/**/*.coffee']

    # uglify:
    #   dist:
    #     files:
    #       'dist/scripts/.min.js': ['src/input1.js', 'src/input2.js']

    watch:
      coffee:
        files: ['src/scripts/**/*.coffee']
        tasks: ['coffee']
      sass:
        files: ['src/styles/*.sass']
        tasks: ['compass']

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-compass'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  # grunt.loadNpmTasks 'grunt-contrib-uglify'

  grunt.registerTask 'default', ['compass', 'coffee']
  # grunt.registerTask 'build', ['coffee', 'concat', 'uglify', 'cssmin']