# AWS: Lambda Code for automate sending mails with SES

## Steps to follow:
1. Verify Mail Adresses in AWS SES Console 
2. Create Iam Role with Cloudwatchlogaccess & SES Access
3. Deploy js Code in lambda
4. Create Schedule Rule in Cloudwatch (Fixed Rate or Cron expression)
5. Resource: https://www.youtube.com/watch?v=mL-4PeuAuWc & https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html (Cron Expression Guide)