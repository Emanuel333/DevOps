# Files
In this section all the different files are listed and there purpose is explained.

## kustomization.yaml
This file is the main file that gets applied to the cluster.
In it are references to the *mysql-deployment.yaml* and the *wordpress-deployment.yaml*.

## mysql-deployment.yaml
This file contains all the necessary information for the mysql container.
Furthermore, it requests persistent volume as storage.

## wordpress-deployment.yaml
This file contains all the necessary information for the wordpress container.
It also requests persistent volume as storage.


# Commands
Here are all the commands, that are used to generate and run the cluster.

First we create a resource group for the cluster.
> az group create --name Lab4 --location northeurope

Then we create the cluster in the resource group.
We also give it a name and set the node count.
Optional: We can also activate monitoring and generate ssh keys.
> az aks create --resource-group Lab4 --name AKSCluster --node-count 1 --enable-addons monitoring --generate-ssh-keys

If you don't have the *Kubernetes command-line client* then you need to download the cli.
**If you already have it installed, skip this command.**
> az aks install-cli

This command configures *kubectl* the use our generated cluster.
> az aks get-credentials --resource-group Lab4 --name AKSCluster

This command generates the wordpress and mysql containers.
It also applys them to the cluster and they should be available shortly.
> kubectl apply -k .\

This commands show more information about the cluster.
> kubectl get nodes
> kubectl get secrets
> kubectl get pvc
> kubectl get pods

Use this command to get the external ip for you wordpress container.
> kubectl get services wordpress

If you don't need the cluster anymore, use this command to clean everything up.
> az group delete --name Lab4 --yes --no-wait