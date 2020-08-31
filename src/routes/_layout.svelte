<style>
	* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: rgb(61, 146, 201);
}
a:hover,
a:focus {
    text-decoration: underline;
}

h3 {
    font-weight: 100;
}

/* LAYOUT CSS */
.pure-img-responsive {
    max-width: 100%;
    height: auto;
}

#layout {
    padding: 0;
}

.header {
    text-align: center;
    top: auto;
    margin: 1em auto .5em;
}

.sidebar {
    background: rgb(75, 86, 94);
    color: #fff;
}

.brand-title,
.brand-tagline {
    margin: 0;
}
.brand-title {
    /*text-transform: uppercase;*/
	font-weight: 400;
}
.brand-tagline {
    font-weight: 200;
    color: rgb(176, 202, 219);
    font-size: 0.8em;
}

.nav-list {
    margin: 0;
    padding: 0;
    list-style: none;
}
.nav-item {
    display: inline-block;
    *display: inline;
    zoom: 1;
}
.nav-item a {
    background: transparent;
    border: 2px solid transparent;
    color: #fff;
    margin-top: 1em;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-size: 85%;
}
.nav-item a:hover,
.nav-item a:focus {
    border: 2px solid rgb(61, 146, 201);
    text-decoration: none;
}


.content-subhead {
        text-transform: uppercase;
        color: #aaa;
        border-bottom: 1px solid #eee;
        padding: 0.4em 0;
        font-size: 80%;
        font-weight: 500;
        letter-spacing: 0.1em;
    }
    
    .content {
        padding: 2em 1em 0;
    }
    

.footer {
    padding: 1em 0;
}
.footer a {
    color: #ccc;
    font-size: 80%;
}
.footer .pure-menu a:hover,
.footer .pure-menu a:focus {
    background: none;
}

@media (min-width: 48em) {
    .content {
        padding: 2em 3em 0;
        margin-left: 25%;
    }

    .header {
        margin: 80% 2em 0;
        text-align: right;
    }
    .brand-tagline {
        font-size: 1.1em;
    }
    .sidebar {
        position: fixed;
        top: 0;
        bottom: 0;
    }

    .footer {
        text-align: center;
    }
}



</style>




<div id="layout" class="pure-g">
    <div class="sidebar pure-u-1 pure-u-md-1-4">
        <div class="header">
            <h1 class="brand-title">Jan Solo</h1>
            <h2 class="brand-tagline">Technology musings and tinkering.</h2>

            <nav class="nav">
                <ul class="nav-list">
                    <li class="nav-item">
                        <a class="pure-button" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="pure-button" href="/about">About</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>

    <div class="content pure-u-1 pure-u-md-3-4">
        <div>

			<main>
				<slot></slot>
			</main>

            <div class="footer">
				<!-- 
                <div class="pure-menu pure-menu-horizontal">
                    <ul>
                        <li class="pure-menu-item"><a href="/about" class="pure-menu-link">About</a></li>
                    </ul>
				</div>
				-->
            </div>
        </div>
    </div>
</div>