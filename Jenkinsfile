node {
  def response 
  stage 'Build image' 
  git 'https://github.com/velvip/lesson-7.git' 
  def docker_image = docker.build ("node-image:${env.BUILD_ID}")

  stage 'Test'
    docker_image.withRun('-p 8080:8080') {c ->
    sh 'ls'
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
  stage 'Deploy to prod'
  steps{
      sh "docker build . -t node-image:${env.BUILD_ID}"
  }
}