import os
from fabric.api import *

env.hosts = ['joaoxsouls@joaoxsouls.webfactional.com']

def deploy():
    code_dir = '~/webapps/montanhanegra/'
    with cd(code_dir):
        local('git push')
        run('git pull')
