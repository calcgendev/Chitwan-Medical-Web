FROM node:22

ENV PORT=3000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN npm install --legacy-peer-deps

#install serve to run the build
RUN npm install -g serve   #

# Copying source files
COPY . /usr/src/app

# Building app
RUN npm run build
EXPOSE 3000

# Running the app
# CMD "npm" "run" "start"
# CMD ["npm", "run", "start"]

# Serve production build
CMD ["serve", "-s", "dist", "-l", "3000"] 

