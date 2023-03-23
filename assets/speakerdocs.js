const domelement = document.querySelector('#featurespeakerid');
const data = [
  { name: 'DR Gemmechu Megersa ', profile: 'drgemechu.webp', message: 'e' },
  { name: 'DR Gutu Tesso ', profile: 'gututesso.webp', message: 'a' },
  { name: 'Mr DinKu Deyassa ', profile: 'dinku.jpg', message: 'f' },
  { name: 'Mr Kilnam Chon ', profile: 'b1.png', message: 'g' },
  { name: 'Mrs Julia Leda ', profile: 'b2.png', message: 'c' },
  { name: 'Mrs Lila Tretikov ', profile: 'b3.png', message: 'b' },
  { name: 'Mr Yochai Benkler ', profile: '2.jpg', message: 'e' },
  { name: 'Mr Ryan Merkley ', profile: '1.jpg', message: 'd' },
];

const messages = {
  a: 'DRM Specialist; Keynote Speaker, Political Economy Guru; Economic Empowerment Lecturer',
  b: 'Currently working as a Senior Advisor to the government of Ethiopia on Disaster Risk Management by being appointed as a consultant by European Union through DT-Global',
  c: 'Management by being appointed as a consultant by European Union through DT-Global',
  d: 'Management by being appointed as a consultant by European Union through DT-Global',
  e: 'Dr Gemechu is a well known Oromo scholar and author on culture, politics and history of the Oromo people.',
  f: "He co-authored the book 'Sacred Knowledge Traditions of the Oromo of the Horn of Africa' with his wife Dr Aneesa Kassam.",
  g: "He co-authored the book 'Sacred Knowledge Traditions of the Oromo of the Horn of Africa' with his wife Dr Aneesa Kassam.",
  h: 'This is sample. Management by being appointed as a consultant by European Union through DT-Global',
  i: 'Management by being appointed as a consultant by European Union through DT-Global',
};

function createstrong(name) {
  const str = document.createElement('strong');
  str.innerHTML = `${name}<br>`;
  return str;
}
function createspan(text, cname) {
  const span = document.createElement('span');
  span.className = cname;
  span.textContent = text;
  return span;
}

function createprofile(path, cname) {
  const imagelement = document.createElement('img');
  imagelement.className = cname;
  imagelement.src = `./assets/images/speaker/${path}`;
  imagelement.alt = 'profile image';
  return imagelement;
}

function createparagraph(cname) {
  const p = document.createElement('p');
  p.className = cname;
  return p;
}

function createcontainer(cname) {
  const divcontainer = document.createElement('div');
  divcontainer.className = cname;
  return divcontainer;
}

function feature(name = '', path = '', key = 'a') {
  let message = messages[key];
  let text = '';
  if (message.length > 100) {
    text = message.substring(100);
    message = message.substring(0, 100);
  }
  const feature = createcontainer('speaker-feature');
  const container = createcontainer('speaker-photo');
  const paragraph = createparagraph('person-message');
  const profile = createprofile(path, 'person-photo');
  const image = createprofile('backimage.jpg', 'bg-cover');
  const title = createstrong(name);
  const span1 = createspan(message, '');
  const span2 = createspan(text, 'desktop-only');
  paragraph.append(title, span1, span2);
  container.append(image, profile);
  feature.append(container, paragraph);
  domelement.append(feature);
  //   console.log(name, path);
}

data.forEach((element) => {
  feature(element.name, element.profile, element.message);
});
