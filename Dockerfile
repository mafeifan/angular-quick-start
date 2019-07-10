###################
### build stage ###
###################

# base image
FROM node:lts-alpine as builder

# set working directory
WORKDIR /app

# add `node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package*.json ./
RUN npm install

# add app
COPY . .

# generate build
RUN npm run build-prod

########################
### production stage ###
########################

# base image
FROM nginx:1.13.9-alpine

# copy artifact build from the 'build environment'
COPY --from=builder /app/dist/ /usr/share/nginx/html

COPY docker-build/nginx/sites-enabled/default /etc/nginx/sites-enabled/default

# expose port 80
EXPOSE 80

# run nginx
CMD ["nginx", "-g", "daemon off;"]
