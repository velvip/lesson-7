# Create docker container 
1.Downlowd files 
2.Assembling the image
`docker build . -t nginx_levelup`
3.Running the image
`docker run -p 5555:8080 -d nginx_levelup`
4. To check go to you browser in this ip: `127.0.0.1:5555` and see welcome page


# Download and run ready docker images
1. To pull a public image from the Amazon ECR Public Gallery:
  a. Identify the image to pull. You can view the available public repositories on the Amazon ECR Public Gallery at https://gallery.ecr.aws
  b. Authenticate your Docker client to the Amazon ECR public registry. Authentication tokens are valid for 12 hours. For more information, see [Registry authentication](https://docs.aws.amazon.com/AmazonECR/latest/public/public-registries.html#public-registry-auth).
2. Pull the image using the 'docker pull' command 
`docker pull public.ecr.aws/m3i5h8e1/nginx_levelup:latest`
3. After pull image on your PC run:
`docker run -p 5555:8080 -d public.ecr.aws/m3i5h8e1/nginx_levelup`
4. To check go to you browser in this ip: `127.0.0.1:5555` and see welcome page
