    module.exports = function(grunt) {
        require('load-grunt-tasks')(grunt);
        grunt.initConfig({
            host: "localhost",
            port: "80",
            output: "build",
            source: "source",
            jade: {
                compile: {
                    options: {
                        client: false,
                        pretty: true,
                        data: require('./source/view/jade/locals.json')
                    },
                    files: [{
                        expand: true,
                        cwd: '<%= source %>/view/jade/',
                        src: ['**/*.jade'],
                        dest: '<%= output %>',
                        ext: '.html'
                    }]
                }
            },
            sass: {
                all: {
                    options: {
                        style: 'expanded'
                    },
                    files: [{
                        expand: true,
                        cwd: '<%= source %>/style/sass/',
                        src: ['**/*.sass'],
                        dest: '<%= output %>/style',
                        ext: '.css'
                    }]
                }
            },
            express: {
                all: {
                    options: {
                        hostname: '<%= host %>',
                        port: '<%= port %>',
                        bases: './<%= output %>',
                        livereload: true
                    }
                }
            },
            copy: {
                style: {                    
                    expand: true,
                    cwd: '<%= source %>/style/',
                    src: ['**/*', '!**/sass/**'],                        
                    dest: '<%= output %>/style'                                             
                },
                script: {
                    expand: true,
                    cwd: '<%= source %>/script/',
                    src: ['**/*'],                        
                    dest: '<%= output %>/script'                         
                },
            },

            watch: {
                base: {
                    files: '<%= output %>/**',
                    options: {
                        livereload: true
                    }
                },
                jade: {
                    files: ['<%= source %>/view/jade/**/*.jade'],
                    tasks: ['jade']
                },
                sass: {
                    files: ['<%= source %>/style/sass/**/*.sass'],
                    tasks: ['sass']
                },
                style: {
                    files: ['<%= source %>/style/**.css'],
                    tasks: ['copy:style']
                },
                script: {
                    files: ['<%= source %>/script/**.js'],
                    tasks: ['copy:script']
                }
            },
            open: {
                all: {
                    path: 'http://<%= host %>:<%= port %>/'
                }
            },

            clean: {
                build: {
                    src: '<%= output %>'
                }
            }
        });

        // grunt.loadNpmTasks('grunt-contrib-uglify');
        // grunt.loadNpmTasks('grunt-sass');
        // grunt.loadNpmTasks('grunt-express');
        // grunt.loadNpmTasks('grunt-open');
        // grunt.loadNpmTasks('grunt-contrib-watch');

        grunt.registerTask('default', ['clean','copy:style','copy:script','jade', 'sass', 'express', 'open', 'watch']);
    };
