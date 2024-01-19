# create build stage from a base image
FROM node:20.9.0-slim

# # add app group of users
# RUN addgroup -g 1001 app

# # add user guest to this group
# RUN adduser -D -u 1001 -G app guest

# # set the user to run the app
# USER guest

# set the working directory to /app in docker image
WORKDIR /app

# copy package.json and package-lock.json to the working directory
COPY package*.json ./

# USER root

# # chown command changes the user and/or group ownership of for given file.
# RUN chown -R app:app .

# # change the user back to the app user
# USER guest

# install dependencies
RUN npm install

# copy the rest of the files to the working directory
COPY . .

# expose port 5000 to tell Docker that the container listens on the specified network ports at runtime
EXPOSE 5000

# command to run the app
CMD npm start