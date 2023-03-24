const domelement = document.querySelector('#featurespeakerid');
const data = [
  {
    id: 1,
    name: 'Gemmechu Megersa (PHD)',
    profile: 'b4.webp',
    title: 'Head Director Erriecha ',
  },
  {
    id: 2,
    name: 'Gutu Tesso (PHD)',
    profile: 'b3.png',
    title: 'DRM Specialist Political Economy Guru;',
  },
  {
    id: 3,
    name: 'DinKu Deyassa ',
    profile: '1.jpg',
    title: 'Abba Dula of Erriecha',
  },
  {
    id: 4,
    name: 'Kilnam Chon ',
    profile: 'b1.png',
    title: 'Professor Directors',
  },
  {
    id: 5,
    name: 'Julia Leda ',
    profile: 'b2.png',
    title: 'Director Of Erriecha Forum',
  },
  {
    id: 6,
    name: 'Lila Tretikov ',
    profile: '4.jpg',
    title: 'Director of Workshop',
  },
  {
    id: 7,
    name: 'Yochai Benkler ',
    profile: '2.jpg',
    title: 'General Director of Follie',
  },
  {
    id: 8,
    name: 'Ryan Merkley ',
    profile: '7.jpg',
    title: 'Hadha Sinqe Of Erriecha',
  },
];

const messages = [
  'He co-authored the book Sacred Knowledge Traditions of the Oromo of the Horn of Africa',
  'Sacred Knowledge Traditions of the Oromo of the Horn of Africa',
  'Management by being appointed as a consultant by European Union through DT-Global',
  'Management by being appointed as a consultant by European Union through DT-Global',
  'Dr Gemechu is a well known Oromo scholar and author on culture, politics and history of the Oromo people.',
  "He co-authored the book Sacred Knowledge Traditions of the Oromo of the Horn of Africa's with his wife Dr Aneesa Kassam.",
  "He co-authored the book 'Sacred Knowledge Traditions of the Oromo of the Horn of Africa' with his wife Dr Aneesa Kassam.",
  'This is sample. Management by being appointed as a consultant by European Union through DT-Global',
  'Management by being appointed as a consultant by European Union through DT-Global',
];

function createimages(path) {
  const imagelement = document.createElement('img');
  imagelement.className = 'speaker-image';
  imagelement.src = `./assets/images/speaker/${path}`;
  imagelement.alt = 'profile image';
  return imagelement;
}

function createparagraph(text, cname) {
  const p = document.createElement('p');
  p.className = cname;
  p.textContent = text;
  return p;
}

function createcontainer(cname) {
  const divcontainer = document.createElement('div');
  divcontainer.className = cname;
  return divcontainer;
}

function createfeature(id, name, title, path) {
  const message = messages[id] ?? '---------';
  const profile = createcontainer('speaker-profile');
  const container = createcontainer('container-image');
  const images = createimages(path);
  container.append(images);
  profile.append(container);
  const information = createcontainer('speaker-info');
  const ptitle = createparagraph(title, 'speaker-title');
  const pname = createparagraph(name, 'speaker-name');
  const pmessage = createparagraph(message, 'speaker-message');
  information.append(pname, ptitle, pmessage);
  domelement.append(profile, information);
}

data.forEach((element) => {
  const newdata = {
    id: element.id ?? 0,
    name: element.name ?? '---',
    title: element.title ?? '----',
    path: element.profile ?? 'backimage.jpg',
  };
  createfeature(newdata.id, newdata.name, newdata.title, newdata.path);
});
