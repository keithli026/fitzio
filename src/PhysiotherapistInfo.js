var physiotherapists = [
    {
        pid: 1,
        name: "Oliver Li",
        gender: "M",
        title: "Physiotherapist",
        photo: process.env.PUBLIC_URL + "/Oliver_Li.jpg",
        summary: `<p>Oliver graduated from Curtin with a Bachelor of Physiotherapy.</p>
        <p>He understands the importance of professional development to further enhance his clinical skills after graduation.</p>
        <p>He completed a qualification of deep dry needling and several courses including shoulder rehabilitation, running biomechanics, headache, and dizziness management.</p>
        <p>Oliver is interested in treating musculoskeletal conditions especially shoulder, back, and neck pain.</p>
        <p>He believes a combination of "hands-on" treatment and therapeutic exercises is important for clients to manage their musculoskeletal conditions and achieve their goals.</p>
        <p>Outside the clinic, Oliver goes to the gym regularly. He enjoys grocery shopping and cooking big meals.</p>`
    },
    {
        pid: 2,
        name: "Oliver A",
        gender: "F",
        title: "Physiotherapist",
        photo: process.env.PUBLIC_URL + "/Oliver_Li.jpg"
    },
    {
        pid: 3,
        name: "Oliver B",
        gender: "M",
        title: "Physiotherapist",
        photo: process.env.PUBLIC_URL + "/Oliver_Li.jpg"
    }
];

export function getPhysiotherapists() {
    return physiotherapists;
}

export function getPhysiotherapist(id) {
    return physiotherapists.find(
        Physiotherapist => Physiotherapist.pid === id
    );
}

export function getPhysiotherapistByName(name) {
    return physiotherapists.find(
        Physiotherapist => Physiotherapist.name.replace(/\s+/g, '-').toLowerCase() === name
    );
}

export function deletePhysiotherapist(pid) {
    physiotherapists = physiotherapists.filter(
        (Physiotherapist) => Physiotherapist.pid !== pid
    );
}


