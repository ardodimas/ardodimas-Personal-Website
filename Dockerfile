FROM php:8.2.11-apache

WORKDIR /var/www/html

COPY index.html ./index.html
COPY style.css ./style.css
COPY image /var/www/html/image