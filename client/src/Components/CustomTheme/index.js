import { createMuiTheme } from '@material-ui/core'
import {red} from '@material-ui/core/colors/red'

const CustomTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#395E2E',
			// light:  'YOUR COLOR',
			// dark:  '',
		},
		secondary: {
			main: '#DB9D86',
		},
	},
})

export default CustomTheme