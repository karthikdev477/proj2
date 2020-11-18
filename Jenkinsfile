pipeline {
  environment {
    registry = "kart10/kart10"
    registryCredential = 'jenkins'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Getting code from GitHub') {
      steps {
        git ''
      }
    }
    stage('Image Build') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Image Deploy and Push') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push()
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
  }
}
