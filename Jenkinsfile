node {
  def response 
  stage 'Build image' 
  git 'https://github.com/velvip/lesson-7.git' 
  def docker_image = docker.build ("node-image:${env.BUILD_ID}")
  options {
    buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
  }

  stage 'Test'
    docker_image.withRun('-p 8080:8080 -d') {c ->
    sh 'sleep 2m'
    } 

  stage 'Push | Apply'
  try {
      timeout(time:120,unit: 'SECONDS'){

    response = input message: 'User input required', ok: 'Check TEST and Deploy to Prod!' 
    return true

      }
  }
  catch (err){
      return false
  } 

stage 'Deploy prod'
        echo '++++++++++++++++++ Deploy on prod ++++++++++++++++++'
        sh 'docker stop $(docker ps -a -q)'
        sh 'docker rm $(docker ps -a -q)'
        sh ''docker run -p 80:8080 -d node:${env.BUILD_ID}''