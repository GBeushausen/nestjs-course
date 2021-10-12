import * as cdk from '@aws-cdk/core';
import {RemovalPolicy} from '@aws-cdk/core';
import * as codecommit from '@aws-cdk/aws-codecommit';

export class PipelineStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Creates a CodeCommit repository called 'WorkshopRepo'
        const repo = new codecommit.Repository(this, 'ILuvCoffee', {
            repositoryName: 'ILuvCoffee',
        });

        repo.applyRemovalPolicy(RemovalPolicy.RETAIN);
    }
}
