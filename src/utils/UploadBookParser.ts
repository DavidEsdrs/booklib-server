import multer from "multer";
import path from "path";
import fs from "fs";
import mime from "mime";
import { Request } from "express";

class UploadBook {
    private URL: string = path.basename("uploads");

    constructor() {}

    private storage(): multer.StorageEngine {
        return multer.diskStorage({
            //Criar o destino do arquivo
            destination: (req, file, callback) => {
              //Verifica se não existe o diretório
              if (!fs.existsSync(this.URL)) {
                //Efetua a criação do diretório caso ele não exista
                fs.mkdirSync(this.URL);
              }
              //Define o caminho da pasta
              callback(null, this.URL);
            },
            //Renomeia o arquivo
            filename: (req, file, callback) => {
              //Aqui vamos usar o mime-type para chegar o tipo do arquivo
              //E predefinir como ele veio até nosso sistema
              const type = mime.extension(file.mimetype);
      
              //Renomeia o nome do arquivo
              //Aqui temos o nome do arquivo gerado pelo Date
              //E colocamos a extensão dele de acordo com o mime-type
              callback(null, `${new Date().getTime()}.${type}`);
            },
          });
    }

    private fileFilter() {
        /*
        Essa configuração vai nos ajudar com 
        1 - A validação do arquivo
        */
        return (
            req: Request,
            file: Express.Multer.File,
            cb: multer.FileFilterCallback
        ) => {
            //Utilizaremos a Lib mime-types para identificar o tipo do arquivo
            const type = mime.extension(file.mimetype);
    
            /* 
            Este array será montado a conditions de validação
            No caso aceitará apenas imagens como "png", "jpg", "jpeg"
            */
            const conditions = ["pdf", "docx"];
    
            //Perguntamos se existe algum desses valores no type
            if (conditions.includes(`${type}`)) {
                //Caso exista, teremos nossa imagem linda maravilhosa
                cb(null, true);
            }
    
            //Caso não de certo a validação não efetuaremos o upload
            cb(null, false);
        };
    }

    get getConfig(): multer.Options {
        /*
        Essa configuração vai nos ajudar com 
        1 - A compor as configs do Multer como Middleware em nossas rotas
        2 - Não será um middleware global e sim para usos unicos e comportamentais
        */
        return {
            //Storage serve para compor a config do multer destination e filename
            storage: this.storage(),
            //FileFilter serve para validar o filtro de arquivos
            fileFilter: this.fileFilter(),
        };
    }
}

export const uploadBook = new UploadBook();