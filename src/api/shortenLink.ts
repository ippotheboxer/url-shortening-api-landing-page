export async function shortenLink(userLink: string) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch("https://api.tinyurl.com/create?api_token=ba1TrtWVt7nGAng8Ib8NHat5kfrqw4G80nijwTwkdc9V1UImj4KssvZ56Ppx", {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
            url: userLink,
            description: "string",
          }),
        redirect: "follow"
    });
    const result = await response.json();
    return result.data.tiny_url;
}