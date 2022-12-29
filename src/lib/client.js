import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "fyk29tx3", // find this at manage.sanity.io or in your sanity.json
  dataset: "production",
  apiVersion: '2022-11-28', // this is from those question during 'sanity init'
  useCdn: true,
//   token: 'skHN7F81198IUpyWDKdN6QG2ZwYhyIQ8aqu9lPjNs6TbI7fGL4R5OLhz7m3G3ve3Er0I6bwECuyJopjn23rVzERZSW8clAzsFLpR6PYRsJlOjmPRQ7X4Obs8ZGUMHW4Qnr4lzf7YNXrXQNaKubA3OGHGBP5OeblJsPW5DX3viw88yn99e3vN'
});
