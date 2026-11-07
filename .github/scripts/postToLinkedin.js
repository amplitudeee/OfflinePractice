// .github/scripts/postToLinkedIn.js
const token = process.env.LINKEDIN_ACCESS_TOKEN;
const authorUrn = process.env.LINKEDIN_PERSON_URN;
const commitMessage = process.env.COMMIT_MESSAGE || "";
const repoUrl = process.env.REPO_URL || "";

// Strip the [linkedin] trigger tag from the final post text
const cleanUpdate = commitMessage.replace(/\[linkedin\]/gi, "").trim();

const postBody = {
  author: authorUrn,
  lifecycleState: "PUBLISHED",
  specificContent: {
    "com.linkedin.ugc.ShareContent": {
      shareCommentary: {
        text: `🚀 Coding Milestone:\n\n${cleanUpdate}\n\n#buildinpublic #javascript #codingjourney`
      },
      shareMediaCategory: "NONE"
    }
  },
  visibility: {
    "com.linkedin.ugc.MemberNetworkVisibility": "PUBLIC"
  }
};

async function publishPost() {
  const response = await fetch("https://api.linkedin.com/v2/ugcPosts", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-Restli-Protocol-Version": "2.0.0"
    },
    body: JSON.stringify(postBody)
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`LinkedIn API error (${response.status}): ${errorText}`);
  }

  console.log("Successfully published update to LinkedIn!");
}

publishPost();
