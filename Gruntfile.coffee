module.exports = (grunt) ->

  grunt.initConfig

    compass:
      public:
        options:
          sassDir: 'src/styles'
          cssDir: 'public/styles'
          outputStyle: 'compact'
          relativeAssets: true
          colorOutput: false

    coffee:
      app:
        options:
          bare: false
          join: true
        files:
          'public/scripts/index.js': ['src/scripts/**/*.coffee']

    # browserify:
    #   basic:
    #     src: ['public/scripts/index-pre-browserify.js']
    #     dest: 'public/scripts/index.js'

    # uglify:
    #   public:
    #     files:
    #       'public/scripts/.min.js': ['src/input1.js', 'src/input2.js']

    watch:
      coffee:
        files: ['src/scripts/**/*.coffee']
        tasks: ['coffee']
      sass:
        files: ['src/styles/*.sass']
        tasks: ['compass']

  # grunt.loadNpmTasks 'grunt-browserify'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-compass'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  # grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.registerTask 'default', ['compass', 'coffee']