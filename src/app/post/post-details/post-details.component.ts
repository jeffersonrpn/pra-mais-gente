import { Component, Input, OnInit } from "@angular/core";
import { Post } from "../post";
import { PostService } from "../post.service";

import { AuthService } from "../../services/auth.service";

@Component({
  selector: "post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.css"]
})
export class PostDetailsComponent implements OnInit {
  eduProgramOptions = [
    { name: "Criação do ProUni", checked: false },
    { name: "Criação do ENEM e SiSu", checked: false },
    { name: "Aumento de vagas nas Universidades Federais", checked: false },
    { name: "Novas Universidades Federais", checked: false },
    { name: "Criação de Campi de Universidades no interior", checked: false },
    {
      name: "Criação de Campi de Institutos Federais no interior",
      checked: false
    },
    { name: "Fortalecimento do FIES", checked: false },
    { name: "Cotas nas Universidades e IFs", checked: false },
    { name: "Universidade Aberta do Brasil", checked: false }
  ];

  // againstTo = [
  //   { name: "Escola sem partido", checked: false },
  //   { name: "Ensino à distância desde o ensino básico", checked: false },
  //   {
  //     name: "Proibição da discussão sobre sexualidade nas escolas",
  //     checked: false
  //   },
  //   { name: "Privatização das Universidades Federais", checked: false }
  // ];

  firstGraduated = false;
  firstGraduatedValue = "Sou o primeiro da família a completar o ensino superior";

  post: Post;
  user: any;
  png: string;

  constructor(
    private postService: PostService,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.createNewPost();
    this.user = this.authService.getUserDetails();
  }

  createNewPost() {
    var post: Post = {
      owner: "",
      occupation: "",
      whoIAmToFamily: "",
      eduPrograms: "",
      againstTo: ""
    };

    this.selectPost(post);
  }

  selectPost(post: Post) {
    this.post = post;
  }

  selectedOptions(list) {
    return list.filter(opt => opt.checked).map(opt => opt.name);
  }

  selectedEduProgramOptions() {
    return this.selectedOptions(this.eduProgramOptions);
  }

  selectedAgainstToOptions() {
    return this.selectedOptions(this.eduProgramOptions);
  }

  createPost(post: Post) {
  }
}
