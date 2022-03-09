import React, { useState } from 'react';

import classes from './Avatar.module.css';
import blankAvatar from './../../../media/avatar_blank.png';

export default function Avatar(props) {
  const [link, setLink] = useState(blankAvatar);
  const [avatarSelected, setAvatarSelected] = useState(false);

  const avatarStyle = 'Circle';
  const topTypes = [
    'NoHair',
    'Eyepatch',
    'Hat',
    'Hijab',
    'Turban',
    'WinterHat1',
    'WinterHat2',
    'WinterHat3',
    'WinterHat4',
    'LongHairBigHair',
    'LongHairBob',
    'LongHairBun',
    'LongHairCurly',
    'LongHairCurvy',
    'LongHairDreads',
    'LongHairFrida',
    'LongHairFro',
    'LongHairFroBand',
    'LongHairNotTooLong',
    'LongHairShavedSides',
    'LongHairMiaWallace',
    'LongHairStraight',
    'LongHairStraight2',
    'LongHairStraightStand',
    'ShortHairDreads01',
    'ShortHairDreads02',
    'ShortHairFrizzle',
    'ShortHairShaggyMullet',
    'ShortHairShortCurly',
    'ShortHairShortFlat',
    'ShortHairShortRound',
    'ShortHairShortWaved',
    'ShortHairSides',
    'ShortHairTheCaesar',
    'ShortHairTheCaesarSidePart',
  ];
  const accessoriesTypes = [
    'Blank',
    'Kurt',
    'Prescription01',
    'Prescription02',
    'Round',
    'Sunglasses',
    'Wayfarers',
  ];

  const hatColors = [
    'Black',
    'Blue01',
    'Blue02',
    'Blue03',
    'Gray01',
    'Gray02',
    'Heather',
    'PastelBlue',
    'PastelGreen',
    'PastelOrange',
    'PastelRed',
    'PastelYellow',
    'Pink',
    'Red',
    'White',
  ];

  const hairColors = [
    'Auburn',
    'Black',
    'Blonde',
    'BlondeGolden',
    'Brown',
    'BrownDark',
    'PastelPink',
    'Blue',
    'Platinum',
    'Red',
    'SilverGray',
  ];
  const facialHairTypes = [
    'Blank',
    'BeardMedium',
    'BeardLight',
    'BeardMajestic',
    'MoustacheFancy',
    'MoustacheMagnum',
  ];
  const facialHairColors = [
    'Auburn',
    'Black',
    'Blonde',
    'BlondeGolden',
    'Brown',
    'BrownDark',
    'Platinum',
    'Red',
  ];
  const clotheTypes = [
    'BlazerShirt',
    'BlazerSweater',
    'CollarSweater',
    'GraphicShirt',
    'Hoodie',
    'Overall',
    'ShirtCrewNeck',
    'ShirtScoopNeck',
    'ShirtVNEck',
  ];
  const clotheColors = [
    'Black',
    'Blue01',
    'Blue02',
    'Blue03',
    'Gray01',
    'Gray02',
    'Heather',
    'PastelBlue',
    'PastelGreen',
    'PastelOrange',
    'PastelRed',
    'PastelYellow',
    'Pink',
    'Red',
    'White',
  ];
  const eyeTypes = [
    'Close',
    'Cry',
    'Default',
    'Dizzy',
    'EyeRoll',
    'Happy',
    'Hearts',
    'Side',
    'Squint',
    'Surprised',
    'Wink',
    'WinkWacky',
  ];
  const eyebrowTypes = [
    'Angry',
    'AngryNatural',
    'Default',
    'DefaultNatural',
    'FlatNatural',
    'RaisedExcited',
    'RaisedExcitedNatural',
    'SadConcerned',
    'SadConcernedNatural',
    'UnibrowNatural',
    'UpDown',
    'UPDownNatural',
  ];
  const mouthTypes = [
    'Concerned',
    'Default',
    'Disbelief',
    'Eating',
    'Grimace',
    'Sad',
    'ScreamOpen',
    'Serious',
    'Smile',
    'Tongue',
    'Twinkle',
    'Vomit',
  ];
  const skinColors = [
    'Tanned',
    'Yellow',
    'Pale',
    'Light',
    'Brown',
    'DarkBrown',
    'Black',
  ];

  /* <Avatar
  avatarStyle={link}
  topType='WinterHat4'
  accessoriesType='Round'
  hatColor='Pink'
  facialHairType='BeardMedium'
  facialHairColor='Brown'
  clotheType='CollarSweater'
  clotheColor='White'
  eyeType='Squint'
  eyebrowType='Angry'
  mouthType='ScreamOpen'
  skinColor='DarkBrown'
/>; */

  const avatarChangeHandler = () => {
    const topType = topTypes[Math.floor(Math.random() * topTypes.length)];
    const accessoriesType =
      accessoriesTypes[Math.floor(Math.random() * accessoriesTypes.length)];
    const hatColor = hatColors[Math.floor(Math.random() * hatColors.length)];
    const hairColor = hairColors[Math.floor(Math.random() * hairColors.length)];
    const facialHairType =
      facialHairTypes[Math.floor(Math.random() * facialHairTypes.length)];
    const facialHairColor =
      facialHairColors[Math.floor(Math.random() * facialHairColors.length)];
    const clotheType =
      clotheTypes[Math.floor(Math.random() * clotheTypes.length)];
    const clotheColor =
      clotheColors[Math.floor(Math.random() * clotheColors.length)];
    const eyeType = eyeTypes[Math.floor(Math.random() * eyeTypes.length)];
    const eyebrowType =
      eyebrowTypes[Math.floor(Math.random() * eyebrowTypes.length)];
    const mouthType = mouthTypes[Math.floor(Math.random() * mouthTypes.length)];
    const skinColor = skinColors[Math.floor(Math.random() * skinColors.length)];

    const link = `https://avataaars.io/?avatarStyle=${avatarStyle}&topType=${topType}&accessoriesType=${accessoriesType}&hairColor=${hairColor}&hatColor=${hatColor}&facialHairType=${facialHairType}&facialHairColor=${facialHairColor}&clotheType=${clotheType}&clotheColor=${clotheColor}&eyeType=${eyeType}&eyebrowType=${eyebrowType}&mouthType=${mouthType}&skinColor=${skinColor}`;

    setLink(link);
    props.addAvatar(link);
    setAvatarSelected(true);
  };
  return (
    <div className={classes.avatar}>
      <img src={link} alt='avatar' onClick={avatarChangeHandler} />
      {!avatarSelected ? (
        <div>Promijeni avatar klikom ili nastavi dalje</div>
      ) : (
        <div />
      )}
    </div>
  );
}
