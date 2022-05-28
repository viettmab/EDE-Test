# Create a .env file and add this content:
SHADOW_DATABASE_URL='mysql://854dh14odhes:pscale_pw__EhKbeLXsVCHFM_FDc5OqDbf4n5Rj9I0K5DsB9B8Z3E@693hd03htc08.us-east-4.psdb.cloud/eva_de_eva?sslaccept=strict'
DATABASE_URL='mysql://f7jon916lltt:pscale_pw_53mqhhEyGYKGIa21cwkZ85rAWog8exPH0UTX3vagmbs@d9vgzh030yaj.us-east-3.psdb.cloud/eva_de_eva?sslaccept=strict'

# Open prisma studio: 
npx prisma studio 

# Execute these command in terminal to run server
#### Step 1
npm install
#### step 2
npx prisma generate
#### step 3
npm run start