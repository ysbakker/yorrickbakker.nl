FROM nginx

RUN rm /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/conf.d/
COPY ./src /usr/share/nginx/html/