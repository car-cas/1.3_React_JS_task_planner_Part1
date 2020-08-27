import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Login.css'

export class Home extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <React.Fragment>
                <CssBaseline />
                <main className="layout" onSubmit={this.handleSubmit}>
                    <Typography variant="h2">
                        Home with navigation drawer
                    </Typography>
                </main>
            </React.Fragment>
        );
    }
}