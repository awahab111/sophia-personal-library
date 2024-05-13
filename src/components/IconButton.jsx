function IconButton({ icon }) {
  return <i className={`fas fa-${icon} iconstyle hover:bg-white space-x-0`} />;
}

export default IconButton;

//yet to be replaced with the icons in navigation.jsx
//i tried to replace it but it wasnt behaving and it was supposed to do
//so i left it as it is, dont wanna waste time on it rn
