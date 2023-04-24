const {
	      __,
      } = wp.i18n;

const variations = [
	{
		name: 'google',
		title: __( 'reCaptcha', 'jet-form-builder' ),
		description: __(
			`reCAPTCHA v3 allows you to verify if an interaction 
is legitimate without any user interaction.`,
			'jet-form-builder',
		),
		icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={ 'jet-fb fill-white-on-toggle-checked' } d="M50.9219 43.871C51.2755 43.4467 51.2181 42.8161 50.7939 42.4625C50.3696 42.109 49.739 42.1663 49.3854 42.5906L44.8942 47.9801L42.8992 45.9852C42.5087 45.5947 41.8755 45.5947 41.485 45.9852C41.0945 46.3757 41.0945 47.0089 41.485 47.3994L43.8671 49.7815C44.4908 50.4052 45.5154 50.3587 46.0801 49.6811L50.9219 43.871Z" fill="#0F172A"/>
			<path className={ 'jet-fb fill-white-on-toggle-checked' } fillRule="evenodd" clipRule="evenodd" d="M31.3934 20.9546C35.1005 20.9087 39.1075 23.2 41.0897 26.311L36.6899 30.7108C36.0599 31.3408 36.5061 32.4179 37.397 32.4179H54.0255C54.5778 32.4179 55.0255 31.9702 55.0255 31.4179V14.7917C55.0255 13.9007 53.9484 13.4546 53.3184 14.0845L49.7621 17.6409C45.4542 12.3679 38.9009 9 31.5606 9C25.6407 9 19.7134 9.0244 13.7914 9.02503C12.9005 9.02512 12.4543 10.1023 13.0843 10.7322L16.6407 14.2886C14.0776 16.3825 8.00073 22.5 8.00073 32.4911C8.02024 38.3671 8.02476 44.2444 8.02476 50.121C8.02476 51.0119 9.1019 51.4581 9.73186 50.8281L13.2882 47.2718C19.4998 55 30.8842 58.0108 40.288 54.2093C41.9073 55.3381 43.8762 56 45.9997 56C51.5226 56 55.9997 51.5229 55.9997 46C55.9997 40.4772 51.5226 36 45.9997 36C41.6072 36 37.8761 38.8321 36.5329 42.77C31.4133 45.314 25.0427 43.4389 21.9606 38.6017L26.3509 34.2114C26.9822 33.5801 26.5329 32.5006 25.6401 32.5037C23.737 32.5102 21.8125 32.5155 19.9533 32.519C19.945 28.7424 22.1595 24.9689 25.3107 22.961L29.701 27.3513C30.3323 27.9826 31.4118 27.5333 31.4087 26.6405C31.4022 24.7377 31.3969 22.8135 31.3934 20.9546ZM53.0255 17.2059L49.6124 20.6189C44.5338 14.4024 38.9998 11.0072 31.4037 11.0072C31.3902 13.0876 31.3871 15.8664 31.3905 18.9545C36.7567 18.8957 40.9998 22 43.639 26.5901L39.8112 30.4179H53.0255V17.2059ZM19.6187 14.4382L16.205 11.0246C20.6037 11.0233 25.0036 11.0193 29.4035 11.0072C29.3828 14.2398 29.3869 19.182 29.4012 24.223L25.5898 20.4117C21.4998 22 17.9533 27.5 17.9533 32.5219L9.99976 32.5088C9.99366 24.909 13.9998 18.5 19.6187 14.4382ZM36.0348 45.1567C35.8057 47.9002 36.7368 50.6706 38.5879 52.7131C29.0923 56.0344 18.4998 52 13.4378 44.2937L10.0248 47.7068V34.509C13.2609 34.5295 18.1944 34.5255 23.2226 34.5112L19.4113 38.3226C21.9998 44 29.4201 47.5654 36.0348 45.1567ZM45.9997 38C41.5815 38 37.9998 41.5817 37.9998 46C37.9998 50.4183 41.5815 54 45.9997 54C50.418 54 53.9997 50.4183 53.9997 46C53.9997 41.5817 50.418 38 45.9997 38Z" fill="#0F172A"/>
		</svg>,
		scope: [ 'block', 'inserter' ],
		attributes: {
			provider: 'google',
		},
	},
	{
		name: 'hcaptcha',
		title: __( 'hCaptcha', 'jet-form-builder' ),
		description: __(
			`hCaptcha is an anti-bot solution that protects user privacy 
and rewards websites. It is the most popular reCAPTCHA alternative.`,
			'jet-form-builder',
		),
		icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={ 'jet-fb fill-white-on-toggle-checked' } d="M19.9221 45.8709C20.2757 45.4466 20.2184 44.8161 19.7941 44.4625C19.3698 44.109 18.7393 44.1663 18.3857 44.5906L13.8944 49.9801L11.8995 47.9852C11.509 47.5946 10.8758 47.5946 10.4853 47.9852C10.0948 48.3757 10.0948 49.0089 10.4853 49.3994L12.8674 51.7815C13.4911 52.4052 14.5157 52.3587 15.0803 51.6811L19.9221 45.8709Z" fill="black"/>
			<path className={ 'jet-fb fill-white-on-toggle-checked' } fillRule="evenodd" clipRule="evenodd" d="M5.75082 41.8091C5.86912 42.3111 6.0049 42.8167 6.15876 43.3232C5.419 44.7188 5 46.3104 5 48C5 53.5228 9.47715 58 15 58C16.3705 58 17.6766 57.7243 18.8659 57.2253C20.343 57.8385 21.8845 58.3034 23.4475 58.5872C27.9656 59.4075 32.8248 58.7321 36.7478 55.5251C40.1174 52.7705 44.7384 48.9438 48.5137 45.8085C50.4021 44.2403 52.0801 42.8441 53.286 41.8398C53.889 41.3377 54.374 40.9336 54.7083 40.6549L55.2201 40.2282C55.7727 39.7743 56.6058 38.9695 57.0825 37.8598C57.6174 36.6147 57.6538 35.0665 56.6243 33.5738C55.6927 32.2225 54.3871 31.822 53.246 31.8299L57.1077 28.58L57.1298 28.5602C59.2051 26.7055 59.7648 23.6115 57.7406 21.3871C56.7994 20.3503 55.5275 19.8112 54.1884 19.8367C53.5221 19.8494 52.8744 19.9999 52.2665 20.2625L54.2685 18.3359C56.3567 16.3875 56.4743 13.0553 54.5164 10.9668L54.5092 10.9591L54.5019 10.9515C52.4721 8.83174 49.107 8.92935 47.0976 10.8406L46.0814 11.7872C46.6606 9.98841 46.2417 7.91958 44.8308 6.51575C42.7924 4.48768 39.3658 4.5148 37.3663 6.62676L37.3536 6.64026L20.7998 24.7897L21.635 22.9358C22.3738 21.7158 22.7265 20.2198 22.5819 18.7808C22.4288 17.2581 21.6935 15.676 20.1254 14.691L20.1133 14.6834L20.1012 14.676C16.9682 12.7696 13.3972 14.5828 11.8958 16.9817C11.2205 18.0608 10.0838 20.7224 8.98585 23.4535C7.85213 26.2736 6.66003 29.4254 5.8577 31.6674C4.89326 34.3624 4.88235 38.1241 5.75082 41.8091ZM35.482 53.9766C42.2083 48.478 53.9452 38.6872 53.9452 38.6872C54.8424 37.9519 56.1697 36.4371 54.9778 34.7091C53.8155 33.0233 51.6132 34.1704 50.7142 34.7403L40.0885 42.4025C39.7234 42.7018 39.3467 42.3584 39.2475 42C39.1923 41.8002 39.1772 41.5605 39.2158 41.338C39.2224 41.3001 39.2305 41.2628 39.2403 41.2262C39.2881 41.0467 39.3748 40.8861 39.5083 40.7774L55.7971 27.0689C57.2041 25.8115 57.4006 23.9842 56.2606 22.7323C55.1483 21.5061 53.3817 21.5429 51.9617 22.8114L37.2968 34.1814C37.0114 34.4122 36.5756 34.3567 36.3588 34.0601C36.0781 33.7478 35.965 33.2207 36.2571 32.8958C36.2617 32.8908 36.2663 32.8858 36.271 32.8809L36.2807 32.8709L36.2846 32.867L52.8942 16.8827C54.1845 15.6889 54.26 13.6176 53.0573 12.3347C51.8386 11.062 49.7339 11.0862 48.4693 12.2961L31.4983 28.1058C31.4838 28.1202 31.4688 28.1335 31.4533 28.1459C31.423 28.1701 31.3911 28.1905 31.3578 28.2073C31.0944 28.3404 30.747 28.2509 30.5 28.0637C30.2204 27.8517 30.0554 27.446 30.3453 27.1645L43.3363 12.4965C44.6387 11.2918 44.6644 9.17148 43.4201 7.93354C42.1731 6.6928 40.0401 6.71164 38.8187 8.00175L19.119 29.6003C18.5763 30.1385 17.8366 30.2838 17.2985 30.1379C16.7763 29.9963 16.5 29.5 16.7518 28.9054L19.8661 21.9933C20.9821 20.25 20.9537 17.5731 19.0615 16.3845C17.1534 15.2235 14.7098 16.2553 13.5912 18.0427C12.4725 19.8301 9.32755 27.9072 7.74075 32.3413C6.95854 34.527 6.88674 37.808 7.66363 41.2045C9.4901 39.2336 12.101 38 15 38C20.5228 38 25 42.4771 25 48C25 51.2268 23.4716 54.0967 21.0992 55.9252C25.9727 57.541 31.3694 57.3386 35.482 53.9766ZM15 40C10.5817 40 7 43.5817 7 48C7 52.4182 10.5817 56 15 56C19.4183 56 23 52.4182 23 48C23 43.5817 19.4183 40 15 40Z" fill="black"/>
		</svg>,
		scope: [ 'block', 'inserter' ],
		attributes: {
			provider: 'hcaptcha',
		},
	},
	{
		name: 'turnstile',
		title: __( 'Turnstile', 'jet-form-builder' ),
		description: __(
			`Turnstile is Cloudflare’s smart CAPTCHA alternative. 
It can be embedded into any website without sending traffic through 
Cloudflare and works without showing visitors a CAPTCHA.`,
			'jet-form-builder',
		),
		icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={ 'jet-fb fill-white-on-toggle-checked' } d="M40.6149 37.2125C41.0498 37.5529 41.1264 38.1814 40.7861 38.6163L37.2322 43.1573C36.6656 43.8813 35.5869 43.9299 34.9576 43.2597L33.2696 41.4623C32.8915 41.0598 32.9114 40.4269 33.314 40.0488C33.7166 39.6708 34.3494 39.6906 34.7275 40.0932L36.0164 41.4657L39.211 37.3837C39.5514 36.9488 40.1799 36.8721 40.6149 37.2125Z" fill="#0F172A"/>
			<path className={ 'jet-fb fill-white-on-toggle-checked' } fillRule="evenodd" clipRule="evenodd" d="M46.5407 43H56.6089C58.8874 43 61.1208 41.7827 61.6499 39.5182C63.5363 31.4454 57.0428 22.976 48.5207 23.4547C46.5416 17.3331 40.672 13 33.9134 13C28.0351 13 22.8286 16.2782 20.2704 21.1603C15.1969 19.6577 9.9458 23.5648 9.66997 28.8454C4.89227 29.8298 1.64218 34.4522 2.03161 39.2536C2.22701 41.6627 4.58295 43 6.94884 43H27.4564C28.7306 47.0571 32.5209 50 36.9985 50C41.4762 50 45.2665 47.0571 46.5407 43ZM47.0924 25.5381C45.4986 19.5 40.5887 15 33.9134 15C28.0257 15 23.4986 18.5 21.2789 23.5448C14.9986 21.5 11.9986 24.5 11.5867 30.4925C6.99857 31 3.62854 34.203 4.02507 39.0919C4.13652 40.466 5.78252 41 6.94884 41H27.0479C27.0153 40.6711 26.9985 40.3375 26.9985 40C26.9985 34.4772 31.4757 30 36.9985 30C42.5214 30 46.9985 34.4772 46.9985 40C46.9985 40.3375 46.9818 40.6711 46.9492 41H56.6089C58.3083 41 59.4552 40.1211 59.7024 39.0631C61.4652 31.5192 54.8741 24.2771 47.0924 25.5381ZM36.9985 32C32.5803 32 28.9985 35.5817 28.9985 40C28.9985 44.4183 32.5803 48 36.9985 48C41.4168 48 44.9985 44.4183 44.9985 40C44.9985 35.5817 41.4168 32 36.9985 32Z" fill="#0F172A"/>
		</svg>,
		scope: [ 'block', 'inserter' ],
		attributes: {
			'provider': 'turnstile',
		},
	},
	{
		name: 'friendly',
		title: __( 'Friendly Captcha', 'jet-form-builder' ),
		description: __(
			`Friendly Captcha is a powerful anti-spam service that 
blocks spam-bots without annoying captcha images and protects user privacy.`,
			'jet-form-builder',
		),
		icon: <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path className={ 'jet-fb fill-white-on-toggle-checked' } d="M49.7875 46.6163C50.1279 46.1814 50.0512 45.5529 49.6163 45.2125C49.1814 44.8721 48.5529 44.9487 48.2125 45.3837L45.0179 49.4657L43.7289 48.0932C43.3509 47.6906 42.718 47.6707 42.3154 48.0488C41.9128 48.4269 41.893 49.0597 42.2711 49.4623L43.959 51.2597C44.5884 51.9299 45.6671 51.8813 46.2337 51.1573L49.7875 46.6163Z" fill="#0F172A"/>
			<path className={ 'jet-fb fill-white-on-toggle-checked' } fillRule="evenodd" clipRule="evenodd" d="M50.2929 14.9131C50.6834 14.5226 50.6847 13.8877 50.2786 13.5133C45.7446 9.33346 39.7941 7 33.603 7C20.0242 7 9 18.0242 9 31.603C9 45.1818 20.0242 56.206 33.603 56.206C35.5725 56.206 37.5176 55.9699 39.4005 55.5133C41.1615 57.0613 43.4711 58 46 58C51.5229 58 56 53.5229 56 48C56 42.4772 51.5229 38 46 38C40.4772 38 36 42.4772 36 48C36 48.2199 36.0071 48.4382 36.0211 48.6546C35.2246 48.7675 34.4168 48.8251 33.603 48.8251C24.0979 48.8251 16.3809 41.1081 16.3809 31.603C16.3809 22.0979 24.0979 14.3809 33.603 14.3809C37.8363 14.3809 41.9089 15.9394 45.0536 18.7388C45.4661 19.106 46.0975 19.1085 46.488 18.718L50.2929 14.9131ZM36.3489 50.6281C35.4448 50.7586 34.5273 50.8251 33.603 50.8251C29.115 50.8251 24.9843 49.284 21.7118 46.7025L19.3079 49.1064C23.2042 52.2932 28.1821 54.206 33.603 54.206C35.0402 54.206 36.4632 54.0692 37.8548 53.8026C37.1779 52.8543 36.6626 51.7827 36.3489 50.6281ZM33.603 9C38.9274 9 44.0581 10.8786 48.1089 14.2687L45.7072 16.6704C42.2994 13.9079 38.0299 12.3809 33.603 12.3809C22.9933 12.3809 14.3809 20.9933 14.3809 31.603C14.3809 37.0044 16.6131 41.8881 20.2046 45.3813L17.8147 47.7712C13.6112 43.6656 11 37.9366 11 31.603C11 19.1288 21.1288 9 33.603 9ZM38 48C38 43.5817 41.5817 40 46 40C50.4183 40 54 43.5817 54 48C54 52.4183 50.4183 56 46 56C41.5817 56 38 52.4183 38 48Z" fill="#0F172A"/>
			<path className={ 'jet-fb fill-white-on-toggle-checked' } d="M26.2222 35.2935C28.2604 35.2935 29.9126 33.6412 29.9126 31.603C29.9126 29.5648 28.2604 27.9126 26.2222 27.9126C24.184 27.9126 22.5317 29.5648 22.5317 31.603C22.5317 33.6412 24.184 35.2935 26.2222 35.2935Z" fill="#0F172A"/>
			<path className={ 'jet-fb fill-white-on-toggle-checked' } d="M40.9839 35.2935C43.0221 35.2935 44.6744 33.6412 44.6744 31.603C44.6744 29.5648 43.0221 27.9126 40.9839 27.9126C38.9457 27.9126 37.2935 29.5648 37.2935 31.603C37.2935 33.6412 38.9457 35.2935 40.9839 35.2935Z" fill="#0F172A"/>
		</svg>,
		scope: [ 'block', 'inserter' ],
		attributes: {
			'provider': 'friendly',
		},
	},
];

variations.forEach( ( variation ) => {
	if ( variation.isActive ) {
		return;
	}
	variation.isActive = ( blockAttributes, variationAttributes ) => (
		blockAttributes.provider === variationAttributes.provider
	);
} );

export default variations;