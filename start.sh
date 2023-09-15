#!/bin/bash


# cd $(dirname "$0")
# cd ..

# work=$(pwd)

docker run --name blog -v G:/js-lion/blog:/data/work -p 35729:35729 -p 4000:4000 -it jekyll:v1 jekyll serve --livereload
