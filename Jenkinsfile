pipeline {
    agent any
    stages{ 
        stage("DockerBuild"){
            agent any
            steps{sh 'docker build . -t nginx_levelup'
        }
    }
        stage ("StartContainer"){
            agent any
            steps{sh 'docker build . -t nginx_levelup'
        }
    }
}
}
