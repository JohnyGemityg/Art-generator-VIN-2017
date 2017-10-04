npm run build
rsync -ave ssh --chown="www-data:www-data" ./dist/* root@vps:/var/www/art.pokornyjan.com/public_html/
