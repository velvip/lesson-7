node {
  def response 
  stage 'Build image' 
  git 'https://github.com/velvip/lesson-7.git' 
  def docker_image = docker.build 'node-image'

  stage 'Test'
    docker_image.withRun ('-p 8080:8080') {c ->
    sh 'ls'
    }

  stage 'Push | Apply'
  try {
      timeout(time:100,unit: 'SECONDS'){

    response = input message: 'User input required', ok: 'Deploy!' 
    return true

      }
  }
  catch (err){
      return false
  } 

stage 'Deploy prod'
    docker_image.withRun ('-p 80:8080') {c ->
    sh 'ls'
    }      

}