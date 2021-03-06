const countries = [
	{
		name: 'Afghanistan',
		phoneCode: '+93',
		code: 'AF',
	},
	{
		name: 'Albania',
		phoneCode: '+355',
		code: 'AL',
	},
	{
		name: 'Algeria',
		phoneCode: '+213',
		code: 'DZ',
	},
	{
		name: 'AmericanSamoa',
		phoneCode: '+1 684',
		code: 'AS',
	},
	{
		name: 'Andorra',
		phoneCode: '+376',
		code: 'AD',
	},
	{
		name: 'Angola',
		phoneCode: '+244',
		code: 'AO',
	},
	{
		name: 'Anguilla',
		phoneCode: '+1 264',
		code: 'AI',
	},
	{
		name: 'Antigua and Barbuda',
		phoneCode: '+1268',
		code: 'AG',
	},
	{
		name: 'Argentina',
		phoneCode: '+54',
		code: 'AR',
	},
	{
		name: 'Armenia',
		phoneCode: '+374',
		code: 'AM',
	},
	{
		name: 'Aruba',
		phoneCode: '+297',
		code: 'AW',
	},
	{
		name: 'Australia',
		phoneCode: '+61',
		code: 'AU',
	},
	{
		name: 'Austria',
		phoneCode: '+43',
		code: 'AT',
	},
	{
		name: 'Azerbaijan',
		phoneCode: '+994',
		code: 'AZ',
	},
	{
		name: 'Bahamas',
		phoneCode: '+1 242',
		code: 'BS',
	},
	{
		name: 'Bahrain',
		phoneCode: '+973',
		code: 'BH',
	},
	{
		name: 'Bangladesh',
		phoneCode: '+880',
		code: 'BD',
	},
	{
		name: 'Barbados',
		phoneCode: '+1 246',
		code: 'BB',
	},
	{
		name: 'Belarus',
		phoneCode: '+375',
		code: 'BY',
	},
	{
		name: 'Belgium',
		phoneCode: '+32',
		code: 'BE',
	},
	{
		name: 'Belize',
		phoneCode: '+501',
		code: 'BZ',
	},
	{
		name: 'Benin',
		phoneCode: '+229',
		code: 'BJ',
	},
	{
		name: 'Bermuda',
		phoneCode: '+1 441',
		code: 'BM',
	},
	{
		name: 'Bhutan',
		phoneCode: '+975',
		code: 'BT',
	},
	{
		name: 'Bosnia and Herzegovina',
		phoneCode: '+387',
		code: 'BA',
	},
	{
		name: 'Botswana',
		phoneCode: '+267',
		code: 'BW',
	},
	{
		name: 'Brazil',
		phoneCode: '+55',
		code: 'BR',
	},
	{
		name: 'British Indian Ocean Territory',
		phoneCode: '+246',
		code: 'IO',
	},
	{
		name: 'Bulgaria',
		phoneCode: '+359',
		code: 'BG',
	},
	{
		name: 'Burkina Faso',
		phoneCode: '+226',
		code: 'BF',
	},
	{
		name: 'Burundi',
		phoneCode: '+257',
		code: 'BI',
	},
	{
		name: 'Cambodia',
		phoneCode: '+855',
		code: 'KH',
	},
	{
		name: 'Cameroon',
		phoneCode: '+237',
		code: 'CM',
	},
	{
		name: 'Canada',
		phoneCode: '+1',
		code: 'CA',
	},
	{
		name: 'Cape Verde',
		phoneCode: '+238',
		code: 'CV',
	},
	{
		name: 'Cayman Islands',
		phoneCode: '+ 345',
		code: 'KY',
	},
	{
		name: 'Central African Republic',
		phoneCode: '+236',
		code: 'CF',
	},
	{
		name: 'Chad',
		phoneCode: '+235',
		code: 'TD',
	},
	{
		name: 'Chile',
		phoneCode: '+56',
		code: 'CL',
	},
	{
		name: 'China',
		phoneCode: '+86',
		code: 'CN',
	},
	{
		name: 'Christmas Island',
		phoneCode: '+61',
		code: 'CX',
	},
	{
		name: 'Colombia',
		phoneCode: '+57',
		code: 'CO',
	},
	{
		name: 'Comoros',
		phoneCode: '+269',
		code: 'KM',
	},
	{
		name: 'Congo',
		phoneCode: '+242',
		code: 'CG',
	},
	{
		name: 'Cook Islands',
		phoneCode: '+682',
		code: 'CK',
	},
	{
		name: 'Costa Rica',
		phoneCode: '+506',
		code: 'CR',
	},
	{
		name: 'Croatia',
		phoneCode: '+385',
		code: 'HR',
	},
	{
		name: 'Cuba',
		phoneCode: '+53',
		code: 'CU',
	},
	{
		name: 'Cyprus',
		phoneCode: '+537',
		code: 'CY',
	},
	{
		name: 'Czech Republic',
		phoneCode: '+420',
		code: 'CZ',
	},
	{
		name: 'Denmark',
		phoneCode: '+45',
		code: 'DK',
	},
	{
		name: 'Djibouti',
		phoneCode: '+253',
		code: 'DJ',
	},
	{
		name: 'Dominica',
		phoneCode: '+1 767',
		code: 'DM',
	},
	{
		name: 'Dominican Republic',
		phoneCode: '+1 849',
		code: 'DO',
	},
	{
		name: 'Ecuador',
		phoneCode: '+593',
		code: 'EC',
	},
	{
		name: 'Egypt',
		phoneCode: '+20',
		code: 'EG',
	},
	{
		name: 'El Salvador',
		phoneCode: '+503',
		code: 'SV',
	},
	{
		name: 'Equatorial Guinea',
		phoneCode: '+240',
		code: 'GQ',
	},
	{
		name: 'Eritrea',
		phoneCode: '+291',
		code: 'ER',
	},
	{
		name: 'Estonia',
		phoneCode: '+372',
		code: 'EE',
	},
	{
		name: 'Ethiopia',
		phoneCode: '+251',
		code: 'ET',
	},
	{
		name: 'Faroe Islands',
		phoneCode: '+298',
		code: 'FO',
	},
	{
		name: 'Fiji',
		phoneCode: '+679',
		code: 'FJ',
	},
	{
		name: 'Finland',
		phoneCode: '+358',
		code: 'FI',
	},
	{
		name: 'France',
		phoneCode: '+33',
		code: 'FR',
	},
	{
		name: 'French Guiana',
		phoneCode: '+594',
		code: 'GF',
	},
	{
		name: 'French Polynesia',
		phoneCode: '+689',
		code: 'PF',
	},
	{
		name: 'Gabon',
		phoneCode: '+241',
		code: 'GA',
	},
	{
		name: 'Gambia',
		phoneCode: '+220',
		code: 'GM',
	},
	{
		name: 'Georgia',
		phoneCode: '+995',
		code: 'GE',
	},
	{
		name: 'Germany',
		phoneCode: '+49',
		code: 'DE',
	},
	{
		name: 'Ghana',
		phoneCode: '+233',
		code: 'GH',
	},
	{
		name: 'Gibraltar',
		phoneCode: '+350',
		code: 'GI',
	},
	{
		name: 'Greece',
		phoneCode: '+30',
		code: 'GR',
	},
	{
		name: 'Greenland',
		phoneCode: '+299',
		code: 'GL',
	},
	{
		name: 'Grenada',
		phoneCode: '+1 473',
		code: 'GD',
	},
	{
		name: 'Guadeloupe',
		phoneCode: '+590',
		code: 'GP',
	},
	{
		name: 'Guam',
		phoneCode: '+1 671',
		code: 'GU',
	},
	{
		name: 'Guatemala',
		phoneCode: '+502',
		code: 'GT',
	},
	{
		name: 'Guinea',
		phoneCode: '+224',
		code: 'GN',
	},
	{
		name: 'Guinea-Bissau',
		phoneCode: '+245',
		code: 'GW',
	},
	{
		name: 'Guyana',
		phoneCode: '+595',
		code: 'GY',
	},
	{
		name: 'Haiti',
		phoneCode: '+509',
		code: 'HT',
	},
	{
		name: 'Honduras',
		phoneCode: '+504',
		code: 'HN',
	},
	{
		name: 'Hungary',
		phoneCode: '+36',
		code: 'HU',
	},
	{
		name: 'Iceland',
		phoneCode: '+354',
		code: 'IS',
	},
	{
		name: 'India',
		phoneCode: '+91',
		code: 'IN',
	},
	{
		name: 'Indonesia',
		phoneCode: '+62',
		code: 'ID',
	},
	{
		name: 'Iraq',
		phoneCode: '+964',
		code: 'IQ',
	},
	{
		name: 'Ireland',
		phoneCode: '+353',
		code: 'IE',
	},
	{
		name: 'Israel',
		phoneCode: '+972',
		code: 'IL',
	},
	{
		name: 'Italy',
		phoneCode: '+39',
		code: 'IT',
	},
	{
		name: 'Jamaica',
		phoneCode: '+1 876',
		code: 'JM',
	},
	{
		name: 'Japan',
		phoneCode: '+81',
		code: 'JP',
	},
	{
		name: 'Jordan',
		phoneCode: '+962',
		code: 'JO',
	},
	{
		name: 'Kazakhstan',
		phoneCode: '+7 7',
		code: 'KZ',
	},
	{
		name: 'Kenya',
		phoneCode: '+254',
		code: 'KE',
	},
	{
		name: 'Kiribati',
		phoneCode: '+686',
		code: 'KI',
	},
	{
		name: 'Kuwait',
		phoneCode: '+965',
		code: 'KW',
	},
	{
		name: 'Kyrgyzstan',
		phoneCode: '+996',
		code: 'KG',
	},
	{
		name: 'Latvia',
		phoneCode: '+371',
		code: 'LV',
	},
	{
		name: 'Lebanon',
		phoneCode: '+961',
		code: 'LB',
	},
	{
		name: 'Lesotho',
		phoneCode: '+266',
		code: 'LS',
	},
	{
		name: 'Liberia',
		phoneCode: '+231',
		code: 'LR',
	},
	{
		name: 'Liechtenstein',
		phoneCode: '+423',
		code: 'LI',
	},
	{
		name: 'Lithuania',
		phoneCode: '+370',
		code: 'LT',
	},
	{
		name: 'Luxembourg',
		phoneCode: '+352',
		code: 'LU',
	},
	{
		name: 'Madagascar',
		phoneCode: '+261',
		code: 'MG',
	},
	{
		name: 'Malawi',
		phoneCode: '+265',
		code: 'MW',
	},
	{
		name: 'Malaysia',
		phoneCode: '+60',
		code: 'MY',
	},
	{
		name: 'Maldives',
		phoneCode: '+960',
		code: 'MV',
	},
	{
		name: 'Mali',
		phoneCode: '+223',
		code: 'ML',
	},
	{
		name: 'Malta',
		phoneCode: '+356',
		code: 'MT',
	},
	{
		name: 'Marshall Islands',
		phoneCode: '+692',
		code: 'MH',
	},
	{
		name: 'Martinique',
		phoneCode: '+596',
		code: 'MQ',
	},
	{
		name: 'Mauritania',
		phoneCode: '+222',
		code: 'MR',
	},
	{
		name: 'Mauritius',
		phoneCode: '+230',
		code: 'MU',
	},
	{
		name: 'Mayotte',
		phoneCode: '+262',
		code: 'YT',
	},
	{
		name: 'Mexico',
		phoneCode: '+52',
		code: 'MX',
	},
	{
		name: 'Monaco',
		phoneCode: '+377',
		code: 'MC',
	},
	{
		name: 'Mongolia',
		phoneCode: '+976',
		code: 'MN',
	},
	{
		name: 'Montenegro',
		phoneCode: '+382',
		code: 'ME',
	},
	{
		name: 'Montserrat',
		phoneCode: '+1664',
		code: 'MS',
	},
	{
		name: 'Morocco',
		phoneCode: '+212',
		code: 'MA',
	},
	{
		name: 'Myanmar',
		phoneCode: '+95',
		code: 'MM',
	},
	{
		name: 'Namibia',
		phoneCode: '+264',
		code: 'NA',
	},
	{
		name: 'Nauru',
		phoneCode: '+674',
		code: 'NR',
	},
	{
		name: 'Nepal',
		phoneCode: '+977',
		code: 'NP',
	},
	{
		name: 'Netherlands',
		phoneCode: '+31',
		code: 'NL',
	},
	{
		name: 'Netherlands Antilles',
		phoneCode: '+599',
		code: 'AN',
	},
	{
		name: 'New Caledonia',
		phoneCode: '+687',
		code: 'NC',
	},
	{
		name: 'New Zealand',
		phoneCode: '+64',
		code: 'NZ',
	},
	{
		name: 'Nicaragua',
		phoneCode: '+505',
		code: 'NI',
	},
	{
		name: 'Niger',
		phoneCode: '+227',
		code: 'NE',
	},
	{
		name: 'Nigeria',
		phoneCode: '+234',
		code: 'NG',
	},
	{
		name: 'Niue',
		phoneCode: '+683',
		code: 'NU',
	},
	{
		name: 'Norfolk Island',
		phoneCode: '+672',
		code: 'NF',
	},
	{
		name: 'Northern Mariana Islands',
		phoneCode: '+1 670',
		code: 'MP',
	},
	{
		name: 'Norway',
		phoneCode: '+47',
		code: 'NO',
	},
	{
		name: 'Oman',
		phoneCode: '+968',
		code: 'OM',
	},
	{
		name: 'Pakistan',
		phoneCode: '+92',
		code: 'PK',
	},
	{
		name: 'Palau',
		phoneCode: '+680',
		code: 'PW',
	},
	{
		name: 'Panama',
		phoneCode: '+507',
		code: 'PA',
	},
	{
		name: 'Papua New Guinea',
		phoneCode: '+675',
		code: 'PG',
	},
	{
		name: 'Paraguay',
		phoneCode: '+595',
		code: 'PY',
	},
	{
		name: 'Peru',
		phoneCode: '+51',
		code: 'PE',
	},
	{
		name: 'Philippines',
		phoneCode: '+63',
		code: 'PH',
	},
	{
		name: 'Poland',
		phoneCode: '+48',
		code: 'PL',
	},
	{
		name: 'Portugal',
		phoneCode: '+351',
		code: 'PT',
	},
	{
		name: 'Puerto Rico',
		phoneCode: '+1 939',
		code: 'PR',
	},
	{
		name: 'Qatar',
		phoneCode: '+974',
		code: 'QA',
	},
	{
		name: 'Romania',
		phoneCode: '+40',
		code: 'RO',
	},
	{
		name: 'Rwanda',
		phoneCode: '+250',
		code: 'RW',
	},
	{
		name: 'Samoa',
		phoneCode: '+685',
		code: 'WS',
	},
	{
		name: 'San Marino',
		phoneCode: '+378',
		code: 'SM',
	},
	{
		name: 'Saudi Arabia',
		phoneCode: '+966',
		code: 'SA',
	},
	{
		name: 'Senegal',
		phoneCode: '+221',
		code: 'SN',
	},
	{
		name: 'Serbia',
		phoneCode: '+381',
		code: 'RS',
	},
	{
		name: 'Seychelles',
		phoneCode: '+248',
		code: 'SC',
	},
	{
		name: 'Sierra Leone',
		phoneCode: '+232',
		code: 'SL',
	},
	{
		name: 'Singapore',
		phoneCode: '+65',
		code: 'SG',
	},
	{
		name: 'Slovakia',
		phoneCode: '+421',
		code: 'SK',
	},
	{
		name: 'Slovenia',
		phoneCode: '+386',
		code: 'SI',
	},
	{
		name: 'Solomon Islands',
		phoneCode: '+677',
		code: 'SB',
	},
	{
		name: 'South Africa',
		phoneCode: '+27',
		code: 'ZA',
	},
	{
		name: 'South Georgia and the South Sandwich Islands',
		phoneCode: '+500',
		code: 'GS',
	},
	{
		name: 'Spain',
		phoneCode: '+34',
		code: 'ES',
	},
	{
		name: 'Sri Lanka',
		phoneCode: '+94',
		code: 'LK',
	},
	{
		name: 'Sudan',
		phoneCode: '+249',
		code: 'SD',
	},
	{
		name: 'Suriname',
		phoneCode: '+597',
		code: 'SR',
	},
	{
		name: 'Swaziland',
		phoneCode: '+268',
		code: 'SZ',
	},
	{
		name: 'Sweden',
		phoneCode: '+46',
		code: 'SE',
	},
	{
		name: 'Switzerland',
		phoneCode: '+41',
		code: 'CH',
	},
	{
		name: 'Tajikistan',
		phoneCode: '+992',
		code: 'TJ',
	},
	{
		name: 'Thailand',
		phoneCode: '+66',
		code: 'TH',
	},
	{
		name: 'Togo',
		phoneCode: '+228',
		code: 'TG',
	},
	{
		name: 'Tokelau',
		phoneCode: '+690',
		code: 'TK',
	},
	{
		name: 'Tonga',
		phoneCode: '+676',
		code: 'TO',
	},
	{
		name: 'Trinidad and Tobago',
		phoneCode: '+1 868',
		code: 'TT',
	},
	{
		name: 'Tunisia',
		phoneCode: '+216',
		code: 'TN',
	},
	{
		name: 'Turkey',
		phoneCode: '+90',
		code: 'TR',
	},
	{
		name: 'Turkmenistan',
		phoneCode: '+993',
		code: 'TM',
	},
	{
		name: 'Turks and Caicos Islands',
		phoneCode: '+1 649',
		code: 'TC',
	},
	{
		name: 'Tuvalu',
		phoneCode: '+688',
		code: 'TV',
	},
	{
		name: 'Uganda',
		phoneCode: '+256',
		code: 'UG',
	},
	{
		name: 'Ukraine',
		phoneCode: '+380',
		code: 'UA',
	},
	{
		name: 'United Arab Emirates',
		phoneCode: '+971',
		code: 'AE',
	},
	{
		name: 'United Kingdom',
		phoneCode: '+44',
		code: 'GB',
	},
	{
		name: 'United States',
		phoneCode: '+1',
		code: 'US',
	},
	{
		name: 'Uruguay',
		phoneCode: '+598',
		code: 'UY',
	},
	{
		name: 'Uzbekistan',
		phoneCode: '+998',
		code: 'UZ',
	},
	{
		name: 'Vanuatu',
		phoneCode: '+678',
		code: 'VU',
	},
	{
		name: 'Wallis and Futuna',
		phoneCode: '+681',
		code: 'WF',
	},
	{
		name: 'Yemen',
		phoneCode: '+967',
		code: 'YE',
	},
	{
		name: 'Zambia',
		phoneCode: '+260',
		code: 'ZM',
	},
	{
		name: 'Zimbabwe',
		phoneCode: '+263',
		code: 'ZW',
	},
	{
		name: 'land Islands',
		phoneCode: '',
		code: 'AX',
	},
	{
		name: 'Antarctica',
		phoneCode: null,
		code: 'AQ',
	},
	{
		name: 'Bolivia, Plurinational State of',
		phoneCode: '+591',
		code: 'BO',
	},
	{
		name: 'Brunei Darussalam',
		phoneCode: '+673',
		code: 'BN',
	},
	{
		name: 'Cocos (Keeling) Islands',
		phoneCode: '+61',
		code: 'CC',
	},
	{
		name: 'Congo, The Democratic Republic of the',
		phoneCode: '+243',
		code: 'CD',
	},
	{
		name: "Cote d'Ivoire",
		phoneCode: '+225',
		code: 'CI',
	},
	{
		name: 'Falkland Islands (Malvinas)',
		phoneCode: '+500',
		code: 'FK',
	},
	{
		name: 'Guernsey',
		phoneCode: '+44',
		code: 'GG',
	},
	{
		name: 'Holy See (Vatican City State)',
		phoneCode: '+379',
		code: 'VA',
	},
	{
		name: 'Hong Kong',
		phoneCode: '+852',
		code: 'HK',
	},
	{
		name: 'Iran, Islamic Republic of',
		phoneCode: '+98',
		code: 'IR',
	},
	{
		name: 'Isle of Man',
		phoneCode: '+44',
		code: 'IM',
	},
	{
		name: 'Jersey',
		phoneCode: '+44',
		code: 'JE',
	},
	{
		name: "Korea, Democratic People's Republic of",
		phoneCode: '+850',
		code: 'KP',
	},
	{
		name: 'Korea, Republic of',
		phoneCode: '+82',
		code: 'KR',
	},
	{
		name: "Lao People's Democratic Republic",
		phoneCode: '+856',
		code: 'LA',
	},
	{
		name: 'Libyan Arab Jamahiriya',
		phoneCode: '+218',
		code: 'LY',
	},
	{
		name: 'Macao',
		phoneCode: '+853',
		code: 'MO',
	},
	{
		name: 'Macedonia, The Former Yugoslav Republic of',
		phoneCode: '+389',
		code: 'MK',
	},
	{
		name: 'Micronesia, Federated States of',
		phoneCode: '+691',
		code: 'FM',
	},
	{
		name: 'Moldova, Republic of',
		phoneCode: '+373',
		code: 'MD',
	},
	{
		name: 'Mozambique',
		phoneCode: '+258',
		code: 'MZ',
	},
	{
		name: 'Palestinian Territory, Occupied',
		phoneCode: '+970',
		code: 'PS',
	},
	{
		name: 'Pitcairn',
		phoneCode: '+872',
		code: 'PN',
	},
	{
		name: 'R??union',
		phoneCode: '+262',
		code: 'RE',
	},
	{
		name: 'Russia',
		phoneCode: '+7',
		code: 'RU',
	},
	{
		name: 'Saint Barth??lemy',
		phoneCode: '+590',
		code: 'BL',
	},
	{
		name: 'Saint Helena, Ascension and Tristan Da Cunha',
		phoneCode: '+290',
		code: 'SH',
	},
	{
		name: 'Saint Kitts and Nevis',
		phoneCode: '+1 869',
		code: 'KN',
	},
	{
		name: 'Saint Lucia',
		phoneCode: '+1 758',
		code: 'LC',
	},
	{
		name: 'Saint Martin',
		phoneCode: '+590',
		code: 'MF',
	},
	{
		name: 'Saint Pierre and Miquelon',
		phoneCode: '+508',
		code: 'PM',
	},
	{
		name: 'Saint Vincent and the Grenadines',
		phoneCode: '+1 784',
		code: 'VC',
	},
	{
		name: 'Sao Tome and Principe',
		phoneCode: '+239',
		code: 'ST',
	},
	{
		name: 'Somalia',
		phoneCode: '+252',
		code: 'SO',
	},
	{
		name: 'Svalbard and Jan Mayen',
		phoneCode: '+47',
		code: 'SJ',
	},
	{
		name: 'Syrian Arab Republic',
		phoneCode: '+963',
		code: 'SY',
	},
	{
		name: 'Taiwan, Province of China',
		phoneCode: '+886',
		code: 'TW',
	},
	{
		name: 'Tanzania, United Republic of',
		phoneCode: '+255',
		code: 'TZ',
	},
	{
		name: 'Timor-Leste',
		phoneCode: '+670',
		code: 'TL',
	},
	{
		name: 'Venezuela, Bolivarian Republic of',
		phoneCode: '+58',
		code: 'VE',
	},
	{
		name: 'Viet Nam',
		phoneCode: '+84',
		code: 'VN',
	},
	{
		name: 'Virgin Islands, British',
		phoneCode: '+1 284',
		code: 'VG',
	},
	{
		name: 'Virgin Islands, U.S.',
		phoneCode: '+1 340',
		code: 'VI',
	},
]

/**
 * Lista de opciones para seleccionar pa??s
 */
export const countryList = countries.map(country => ({
	value: country.name,
	title: country.name,
	phonecode: country.phoneCode,
	code: country.code
}))

/**
 * Funci??n para filtrar c??digo de pa??s
 * @param {String} countryName - nombre de pa??s para filtrar c??digo de pa??s
 * @returns {Array} - c??digo de pa??s correspondiente al nombre de pa??s
 */
export function phoneCodeOptions(countryName) {
	return countries
		.filter(
			country =>
				country.name.toLocaleLowerCase() ===
				countryName.toLocaleLowerCase()
		)
		.map(country => ({
			value: country.phoneCode,
			title: country.phoneCode,
		}))
}
