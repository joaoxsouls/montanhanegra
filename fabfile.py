import os
from fabric.api import *
env.use_ssh_config = True
env.hosts = ['webfaction']

def deploy():
    code_dir = '~/webapps/montanhanegra/'
    with cd(code_dir):
        local('git push')
        run('git pull')
