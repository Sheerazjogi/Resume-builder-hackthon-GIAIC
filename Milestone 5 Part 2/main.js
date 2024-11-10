document.getElementById('formResume')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const elements = {
        url: document.getElementById('url'),
        profile: document.getElementById('profile'),
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        phone: document.getElementById('phone'),
        city: document.getElementById('city'),
        address: document.getElementById('address'),
        degree: document.getElementById('degree'),
        year: document.getElementById('year'),
        university: document.getElementById('university'),
        grade: document.getElementById('grade'),
        skill: document.getElementById('skill'),
        level: document.getElementById('level'),
        title: document.getElementById('title'),
        company: document.getElementById('company'),
        duration: document.getElementById('duration')
    };

    const profileFile = elements.profile.files?.[0];
    const profileUrl = profileFile ? URL.createObjectURL(profileFile) : '';
    const uniqueUrl = `resumes/${elements.url.value.replace(/\s+/g, '_')}_cv.html`;

    const resumeOutput = `
        <div>
            <h1><b>DYNAMIC RESUME BUILDER</b></h1>
            <h2>IT ASSISTANT</h2>

            <h3>PERSONAL INFORMATION</h3>
            ${profileUrl ? `<img src="${profileUrl}" alt="Profile Picture" class="profilePicture">` : ""}
            <p><b>Name:</b> ${elements.name.value}</p>
            <p><b>Email:</b> ${elements.email.value}</p>
            <p><b>City:</b> ${elements.city.value}</p>
            <p><b>Phone:</b> ${elements.phone.value}</p>
            <p><b>Address:</b> ${elements.address.value}</p>

            <h3>EDUCATION</h3>
            <p>${elements.degree.value} - ${elements.year.value} - ${elements.grade.value}</p>
            <p><b>University:</b> ${elements.university.value}</p>

            <h3>SKILLS</h3>
            <p><b>Skills:</b> ${elements.skill.value}</p>
            <p><b>Level:</b> ${elements.level.value}</p>

            <h3>EXPERIENCE</h3>
            <p><b>Job Title:</b> ${elements.title.value} - ${elements.duration.value}</p>
            <p><b>Company:</b> ${elements.company.value}</p>
        </div>
    `;

    const resumeOutputElement = document.getElementById('resumeDisplay');
    resumeOutputElement.innerHTML = resumeOutput;

    // const downloadLink = document.createElement('a');
    // downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
    // downloadLink.download = uniqueUrl;
    // downloadLink.textContent = "Download your dynamic resume builder";
    // resumeOutputElement.appendChild(downloadLink);

    const buttonContainer = document.createElement("div");
    const downloadButton = document.createElement("button");
    downloadButton.textContent = "Download as PDF";
    downloadButton.addEventListener("click", () => window.print());
    buttonContainer.appendChild(downloadButton);

    const shareLinkButton = document.createElement("button");
    shareLinkButton.textContent = "Shareable Link";
    shareLinkButton.addEventListener("click", () => {
        const shareableLink = `${location.origin}/${uniqueUrl}`;
        navigator.clipboard.writeText(shareableLink)
            .then(() => alert('Link copied to clipboard!'))
            .catch(err => alert('Failed to copy link: ', err));
    });
    buttonContainer.appendChild(shareLinkButton);

    resumeOutputElement.appendChild(buttonContainer);
});
