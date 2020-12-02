pipeline {
  environment {
    registry = "kart10/kart10"
    registryCredential = 'docker'
    dockerImage = ''
  }
  agent any
  stages {
    stage('Cloning Git') {
      steps {
        git 'https://github.com/karthikdev477/proj2.git'
      }
    }
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }
    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
            dockerImage.push("latest")
          }
        }
      }
    }
    stage('Remove Unused docker image') {
      steps{
        sh "docker rmi $registry:$BUILD_NUMBER"
      }
    }
      stage('Deploy to GKE') {
            steps{
                sh 'kubectl apply -f deploy.yaml'
                sh 'kubectl apply -f serv.yaml'
            }
        }
        stage("Get frontend service") {
            steps {
                sleep(50) 
                sh 'kubectl get svc'
                sh 'kubectl get pods'
            }
        }
        stage("clean up") {
            steps {
                sleep(30) 
                sh 'kubectl delete deployment voting-app-deploy'
                sh 'kubectl delete svc voting-service'
            }
        }
    }    
}
    
 
