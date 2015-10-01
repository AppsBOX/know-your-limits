module.exports = function(grunt) {
  grunt.initConfig({
    less: {
      production: {
        options: {
          paths: ["bower_components/bootstrap/less"],
          yuicompress: true
        },
        files: {
          "css/bootstrap-modified.min.css": "_less/bootstrap_override.less"
        }
      }
    },
    copy: {
      fontawesome: {
        files: [
          {expand: true, cwd: 'bower_components/components-font-awesome/css/', src: ['font-awesome.min.css'], dest: 'css/'},
          {expand: true, cwd: 'bower_components/components-font-awesome/fonts/', src: ['*'], dest: 'fonts/'}
        ]
      }
    },
    exec: {
      build: {
        cmd: 'jekyll build'
      },
      serve: {
        cmd: 'jekyll serve'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-exec');

  grunt.registerTask('default', [ 'less', 'copy' ]);
};
