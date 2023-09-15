# 获取最新的 ruby 镜像
FROM ruby:latest
# 设置工作目录
WORKDIR /data/work

# 安装 jekyll
RUN gem install jekyll bundler
# 安装 jekyll 主题
RUN gem install jekyll-theme-midnight

# 暴露端口
EXPOSE 400