# Contributor Setup 

This page describes how to setup your own environment to contribute content to the AIOps Instana PoT.

**Prerequisites**

- You must have access to the internal IBM GitHub repository https://github.ibm.com.
- Git is required on your workstation (installed default on most Mac installations).
- Node.js must be installed on your local machine to render the site locally.
- [Visual Studio code](https://code.visualstudio.com/docs/setup/mac) is highly recommended for your local editing environment (this guide assumes you are using VSCode)

## Installing NVM , Node.js

It is recommended that you install the Node Version Manager (NVM) with Brew instead of installing Node.js separately.  NVM is a tool that allows you to install and switch between Node.js versions very easily.

The following instructions were taken from https://tecadmin.net/install-nvm-macos-with-homebrew/ and assume you already have [Homebrew](https://brew.sh/) installed.  If you don't have brew installed you can install it with this: https://www.digitalocean.com/community/tutorials/how-to-install-and-use-homebrew-on-macos.

1. Before installing NVM make sure there are no existing instances of node installed.
      ```bash
      brew uninstall --ignore-dependencies node 
      brew uninstall --force node 
      ```

2. Update the Homebrew package list and install NVM.
      ```bash
      brew update
      brew install nvm
      ```

3. Configure defaults for NVM.  Create a new directory for NVM settings.
      ```bash
      mkdir ~/.nvm
      ```

4. Append intialization commands to your local profile file (`.bash_profile` for linux or `.zprofile` for later versions of MacOS).  Copy and paste the following lines in a terminal window.
      ```bash
      cat <<EOF >> ~/.zprofile
      export NVM_DIR="$HOME/.nvm"
      [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  
      [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
      EOF
      ```

5. Install Node.js with NVM.  First list all available versions with:
      ```bash
      nvm ls-remote
      ```
      The response should look something like the following.
      ```bash
      nvm ls
            v12.22.12
            v14.19.3
            v16.14.2
            v17.0.1
            v18.9.1
      ->      v19.0.1
      default -> node (-> v19.0.1)
      iojs -> N/A (default)
      unstable -> N/A (default)
      node -> stable (-> v19.0.1) (default)
      stable -> 19.0 (-> v19.0.1) (default)
      lts/* -> lts/hydrogen (-> N/A)
      lts/argon -> v4.9.1 (-> N/A)
      lts/boron -> v6.17.1 (-> N/A)
      lts/carbon -> v8.17.0 (-> N/A)
      lts/dubnium -> v10.24.1 (-> N/A)
      lts/erbium -> v12.22.12
      lts/fermium -> v14.21.3 (-> N/A)
      lts/gallium -> v16.19.1 (-> N/A)
      lts/hydrogen -> v18.15.0 (-> N/A)
      ```

6. You'll want to install the latest stable version (v19.0.1) in this example.
      ```bash
      nvm install 19
      ```

7. Indicate that you want to use this version.
      ```bash
      nvm use 19
      ```
## Setup GitHub Account

This section will configure you workstation to more easily work with the GittHub repository, but adding your workstation's public RSA key to your GitHub account.  This will make it easier cloning and committing by avoiding manually adding passwords during these operations.  It is also more secure to use RSA Keys than to use user ids and passwords.

1. Navigate and log into the IBM GitHub Enterprise page. https://github.ibm.com.  Select the Settings item under the user drop down menu in the upper right corner of the screen.
      ![settings menu](/images/user_settings_menu.png)

2. Select the **SSH and GPG keys** tab on the left, then press the green **New SSH key** button in the upper right.
      ![settings new key](/images/settings_new_key.png)

3. Open up a terminal window to get your workstation's public key.  Enter the command to get your existing key.
      ```bash
      cat ~/.ssh/id_rsa.pub
      ```
      If nothing comes back, then you need to create one.  You can create a new key (or overwite your existing key) with.
      ```bash
      ssh-keygen -b 4096 -f ~/.ssh/id_rsa -N ""
      ```
      Now you can get the key again with.
      ```bash
      cat ~/.ssh/id_rsa.pub
      ```
      Copy this key to your clipboard.

4. Go back to the GitHub user settings page.  Provide an appropriate **Title** for the key, and paste your public key into the **Key** field.  Press the **Add SSH key** button.
      ![add new key](/images/add_new_key.png)

## Setup Repository

1. Navigate to the main repository on IBM's Enterprise GitHub 
https://github.ibm.com/gbood/AIOps-POT.

2. Fork the respository by pressing the Fork button at the upper right corner of the page.
      ![fork button](/images/fork_button.png)

3. Select your local account to fork the repository to.
      ![selected repository](/images/selected_repository.png)

4. Open up a terminal and create a new top level directory top work in.
      ```bash
      mkdir ~/instana-pot
      cd ~/instana-pot
      ```

5. Clone your repository fork to your local workstation by going back to **your** forked repository.  Press the green **Code** button, and select the SSH key option. Then copy this URL to your clipboard.
      ![clone](/images/local_clone.png)

6. Go back to your terminal and issue the clone command using your Git URL.
      ```bash
      git clone <your forked repository url>
      ```
For example it should look similar to the following.
      ```bash
      $ git clone git@github.ibm.com:jconallen/AIOps-POT.git
      Cloning into 'AIOps-POT'...
      remote: Enumerating objects: 107, done.
      remote: Counting objects: 100% (107/107), done.
      remote: Compressing objects: 100% (87/87), done.
      remote: Total 107 (delta 21), reused 95 (delta 14), pack-reused 0
      Receiving objects: 100% (107/107), 799.14 KiB | 14.80 MiB/s, done.
      Resolving deltas: 100% (21/21), done.
      ```

## Visual Studio Code

1. Open up a new window of Visual Studio Code.  Then select the Extensions option from the side bar. Enter `mdx` in the search bar and then install the top extension.
      ![mdx extension](/images/install_mdx.png.png).

3. The extension will only take a minute to install.
      ![mdx installed](/images/mdx_installed.png)

4. Use the **File > Open** menu to open up the repository that you just cloned to your workstation.
      ![file open](/images/file_open.png)

5. Open up a new Terminal window in the VS Code shell with the main menu item **Terminal > New Terminal**.
      ![new terminal](/images/new_terminal.png)

6. Lets make sure that node and nvm are installed.  Enter in this terminal window the following command.  Substitute the node version you used in the Installing NVM section earlier.
      ```bash
      nvm use 19
      ```
      ![use nvm](/images/nvm_use.png)

7. Since this project is actually a node.js project we need to initialize the code that will format and provide a test site for us.  In the terminal window run the command:
      ```bash
      npm install
      ```
      ![npm installed](/images/npm_install.png)

8. Your local clone is not configured and you can test it out by running the **Docusaurus** command to host the site locally.  Enter the following command in the terminal window.
      ```bash
      npm start
      ```
      ![npm start](/images/npm_start.png)

9. This will open up a new browser window exposing the site's home page.  You can interact with the site to see how the documentation will look when it is completed.
      ![home page](/images/home_page.png)

## Committing changes

At this point you can edit the files in the project using [Markdown](https://docusaurus.io/docs/markdown-features). Once you have edited enough for review or inclusion to the main site you should notice a numerical icon over the Git tool on the left hand side of VS Code.  This indicates the number of file changes you have made in this site.

To create a pull request with your changes:

1. Select the Git source control icon from the left hand tool bar.

2. It is a good idea to get in the habit of pulling in the latest changes before any commit.  You can do this by selecting the **Pull** item from the command menu (...) at the top of the source control section.
      ![pull](/images/pull.png)

3. Stage all the changes you want to commit.  The easiest way to do this is to stage all changes by pressing on the plus (+) icon to the right of the **Changes** line.
      ![stage all](/images/stage_all_changes.png)

4. If you look closely all the changed files are now under a section called "Staged Changes".  Add a short commit message that provides some information about the changes being committed.
      ![commit message](/images/commit_message.png)

5. You are ready to *Commit* your changes.  This is the first stage of sending them to your repository.  Press the **Commit** button.
      ![committed all](/images/commited_all_changes.png)

6. If you committed all your changes the button will change to **Sync Changes**, which means you can send all your changes to **your** repository.  Press the **Sync Change** button.

7. If the changes were sync'd without problems the **Commit** button will be disabled.
      ![sync change](/images/changes_syncd.png)

## Creating pull request

With changes made in your forked version of the main repository you are ready to create a "pull request" which is essentially bundling a bunch of changes you made in your version of the respository and offering it to the maintainer of the original repository for inclusion.

1. Navigate back to the web page for your forked copy of the repository.  Look for a note that indicates that your branch is ahead of the main repository.  This means you have changes in your forked repository that have not been incorporated in the main repository.
      ![one head](/images/one_ahead.png)

2. Select the **Contribute** drop down menu.
      ![contribute](/images/contribute.png)

3. Press the green **Open pull request** button.

4. This action will open the Comparing changes view.  You can review the changes made, and when finished press the green **Create pull request** button.
      ![create pull request](/images/comparing_changes.png)

5. The pull request has issue like information, and can manage a thread of converstation just like an issue.  This is your oppertunity to describe, succinctly, what you have changed so that the maintainer can better assess what you provided.  Fill in this information.  Then press the green **Create pull request** button.
      ![edit comments](/images/edit_pull_request_comments.png)

That's it.  The rest of the process will be carried out by the owner of the main respository.

## Syncing changes from others

You are not the only collaborator to the documentation.  Others will be doing exactly what you are doing, and from time to time you'll want to update your local fork with their changes.

1. Go to the home page of your repository fork, and examine the message at the top of the resource listing.  If it indicates that you are "behind" the main repository, you can incorporate those changes into yours.
      ![behind](/images/behind.png)

2. You can optionally compare the changes with your repository by selecting the **Compare** option from the **Fetch upstream** dropdown. 
      ![compare](/images/compare.png)

3. Go back to the main page, and this time select the **Fetch and merge** option from the **Fetch upstream** dropdown. 
      ![merge](/images/merge.png)

4. This will merge in the changes from the main repository into your fork of it.  But you still need to pull in the changes to your local workstation.  Open up Visual Studio Code on your project.  Select the Git Source control option from the left hand tool bar.

5. Using the control menu select the **Pull** item to update your loacl workstation to the latest changes.
      ![pull_sync ](/images/pull_syncd.png)

Your repository and workstation are now syncd with the latest changes from the main repository.