import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router} from '@angular/router';
import { ProjectViewComponent } from './../project-view/project-view.component';
import { ProjectSelectionsComponent } from './../project-selections/project-selections.component';
import { NavTitleService } from './../../shared/services/nav-title.service';
import { CodeContainer } from './../../shared/code-container/code-container.component';

@Component({
    moduleId: module.id,
    selector: 'my-home',
    templateUrl: 'home.component.html',
    providers: [NavTitleService],
    directives: [
        ROUTER_DIRECTIVES,
        ProjectViewComponent,
        ProjectSelectionsComponent,
        CodeContainer]
})

export class HomeComponent implements OnInit {
    private showEnabled: boolean = false;
    private isActive: boolean = false;
    private routeName: string;
    private timeToAnimate: boolean = false;
    private interval: any;
    private projects: Project[] = [
        {
            number: '01',
            heading: 'Sequencer',
            caption: 'UI Built with scss and makes use of bootstrap',
            color: '#36D2C7',
            link: '/drum'
        },
        {
            number: '02',
            heading: 'Calculator',
            caption: 'An 808 inspired sequencer built with angular2',
            color: '#8EDB37',
            link: '/calculator'
        },
        {
            number: '03',
            heading: 'TicTacToe',
            caption: 'Play a couple games, eh?',
            color: '#FFAF27',
            link: '/tictactoe/play'
        }
    ];
    private activeProject: Project = this.projects[0];

    constructor(
        private navTitleService: NavTitleService,
        private router: Router) {
        this.router.events.subscribe(route => {
            this.routeName = this.navTitleService.getCurrentUrl();
        });
    }

    ngOnInit() {
        this.showEnabled = false;
    }

    intervalAnimate() {
        setTimeout(() => {
        this.timeToAnimate = true;
            console.log(this.timeToAnimate);
        }, 5500);
    }

    setActiveProject(project: Project) {
        this.activeProject = project;
        this.intervalAnimate();
    }

    toggleActive() {
        this.isActive = !this.isActive;
    }
}

// stupid hack to have a blank router at times when others arent selected
@Component({ selector: 'blank', template: '' }) export class EmptyComponent { }

export interface Project {
    number: string;
    heading: string;
    caption: string;
    color: string;
    link: string
}