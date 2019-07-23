# cloud-policies
Policies to manage our cloud services

This project used [cloud-custodian](https://github.com/cloud-custodian/cloud-custodian) policies.

## Launch it locally

You can use the cloud-custodian image for local tests

```
docker container run --rm -it -v $(pwd)/output:/home/custodian/output \
  -v $(pwd)/policy.yml:/home/custodian/policy.yml \
  -e AWS_DEFAULT_REGION=all \
  -e AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID} \
  -e AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY} \
  cloudcustodian/c7n run -v -s /home/custodian/output /home/custodian/policy.yml
```
