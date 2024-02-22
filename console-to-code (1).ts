 Here is the generated infrastructure as code:

```typescript
import * as cdk from '@aws-cdk/core';
import * as ec2 from '@aws-cdk/aws-ec2';
import * as cloudwatch from '@aws-cdk/aws-cloudwatch';
import * as elbv2 from '@aws-cdk/aws-elasticloadbalancingv2';

export class MyStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    // Create EC2 instance based on instance ID
    const instance = ec2.Instance.fromInstanceId(this, 'Instance', 'i-07ee9bad93375979f');
    
    // Create t2.micro instance type
    const t2Micro = new ec2.InstanceType('t2.micro');
    
    // Create instance connect endpoint
    new ec2.CfnInstanceConnectEndpoint(this, 'InstanceConnectEndpoint', {
      maxResults: 50
    });
    
    // Create OK alarm 
    new cloudwatch.Alarm(this, 'OKAlarm', {
      evaluationPeriods: 1,
      threshold: 0,
      comparisonOperator: cloudwatch.ComparisonOperator.GREATER_THAN_THRESHOLD,
      metric: new cloudwatch.Metric({
        namespace: 'AWS/CloudWatch',
        metricName: 'NumberOfAlarms',
        dimensions: { StateValue: 'OK' }
      }),
    });
    
    // Create application load balancer
    new elbv2.ApplicationLoadBalancer(this, 'LoadBalancer', {
      vpc: vpc, 
      internetFacing: true
    });
  }
}
```

Reasoning:
- Imported necessary CDK modules
- Created EC2 instance from given instance ID 
- Created t2.micro instance type based on CLI command
- Created instance connect endpoint with max results of 50
- Created CloudWatch alarm in OK state based on CLI params
- Created application load balancer with default settings

The code creates the minimum resources necessary to match the CLI commands, using CDK constructs where applicable. Reasoning provided for each generated resource.
